import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm, UseFormProps, UseFormReturn } from "react-hook-form";
import z from "zod";

type httpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface FormProps<T extends FieldValues>
    extends Omit<ComponentProps<'form'>, 'action' | 'method' | 'onSubmit'> {
    form: UseFormReturn<T>,
    action: string,
    method?: httpMethod,
    onSubmit?: SubmitHandler<T>
};

interface SchemaReturn {
    schema: z.ZodObject<Record<string, z.ZodType>>,
    defaultValues: Record<string, any>
};

interface FieldReturn<T extends z.ZodType = z.ZodType> {
    schema: T,
    defaultValue: z.infer<T> | undefined
};

interface Fields {
    [key: string]: FieldReturn | Fields;
}

function merge(defaultValues: Record<string, any>, values?: Record<string, any>): Record<string, any> {
    if (!values) return {...defaultValues};

    return Object.keys(defaultValues).reduce((acc, key) => {
        const value = values[key];
        const defaultValue = defaultValues[key];

        acc[key] = defaultValue && typeof defaultValue === 'object' && !Array.isArray(defaultValue) && value && typeof value === 'object' && !Array.isArray(value)
            ? merge(defaultValue, value) 
            : (value !== undefined ? value : defaultValue);

        return acc;
    }, {} as Record<string, any>);
}

const onFormSubmit = <T extends FieldValues>(
    action: string = '',
    method: httpMethod = 'post'
): SubmitHandler<T> => async (formData) => {
    await fetch(action, {
        method: method,
        body: JSON.stringify(formData)
    }).then(async (response) => {
        console.log(response);
    });
};

export const Form = <T extends FieldValues>({
    form, children, disabled, ...rest
}: {disabled?: boolean} & FormProps<T>) => {
    const submitter = rest?.onSubmit || onFormSubmit<T>(rest?.action ?? '', rest?.method);

    return (
        <FormProvider {...form}>
            <form
                noValidate
                {...rest}
                onSubmit={form.handleSubmit(submitter)}
            >
                <fieldset className="form-scope" disabled={disabled}>
                    {children}
                </fieldset>
            </form>
        </FormProvider>
    );
};

export function createForm<TSchema extends z.ZodObject<any>, TContext = any>(
    schema: { schema: TSchema; defaultValues: any },
    options?: Omit<UseFormProps<z.input<TSchema>>, 'resolver'>
) {
    return useForm<z.input<TSchema>, any, z.output<TSchema>>({
        ...options,
        defaultValues: {},//merge(schema.defaultValues, options?.defaultValues),
        resolver: zodResolver(schema?.schema)
    });
}

type MapToZod<T> = {
  [K in keyof T]: T[K] extends { schema: z.ZodType<any, any, any> }
    ? T[K]["schema"]
    : T[K] extends Record<string, any>
    ? z.ZodObject<MapToZod<T[K]>>
    : never;
};

export function createSchema<T extends Record<string, any>>(fields: T) {
    function isField(value: any): value is FieldReturn<z.ZodType> {
        return value && "schema" in value && "defaultValue" in value;
    }

    const parse = (fields: any) => {
        const schema: any = {};
        const defaultValues: Record<string, any> = {};

        for (const key in fields) {
            const value = fields[key];

            if (isField(value)) {
                schema[key] = value?.schema;
                defaultValues[key] = value?.defaultValue;
            } else {
                const nested = parse(value);
                schema[key] = z.object(nested?.schema);
                defaultValues[key] = nested?.defaultValues;
            }
        }

        return {schema, defaultValues};
    }

    const res = parse(fields);
    const schema = z.object(res.schema) as unknown as z.ZodObject<MapToZod<T>>;
    
    return { 
        schema, 
        defaultValues: res.defaultValues as z.input<typeof schema> 
    };
};

export const field = {
    string: <T extends z.ZodType<string|undefined> = z.ZodString>(
        schema: T = z.string() as unknown as T, 
        def: any  = ''
    )  => {
        return { schema: z.preprocess(v => v ? String(v) : undefined, schema), defaultValue: def };
    },

    number: <T extends z.ZodType<number|undefined> = z.ZodNumber>(
        schema: T = z.number() as unknown as T, 
        def: any = ''
    ) => {
        return { schema: z.preprocess(v => v ? Number(v) : undefined, schema), defaultValue: def };
    }
};

z.config({
    customError: (issue) => {
        switch (issue.code) {
            case 'invalid_type': return (issue.input === undefined) ? 'Required' : undefined;
            default: return undefined;
        }
    }
});
