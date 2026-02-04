import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm, UseFormProps } from "react-hook-form";
import merge from "lodash/merge";
import z from "zod";

type Field<T extends z.ZodType = z.ZodType> = {
    type: 'field';
    schema: T;
    defaultValue: z.input<T>;
};

type SchemaShape = {
    [key: string]: Field | SchemaShape;
};

type ExtractZodSchema<T> = T extends Field<infer U>
    ? U : T extends SchemaShape
    ? z.ZodObject<{ [K in keyof T]: ExtractZodSchema<T[K]> }> : never;

export function createSchema<T extends SchemaShape>(
    fields: T,
    refine?: (schema: z.ZodObject<{ [K in keyof T]: ExtractZodSchema<T[K]> }>) => z.ZodType
) {
    const buildShape = (fields: SchemaShape) => {
        const shape: any = {};
        const defaults: any = {};

        for (const key in fields) {
            const field = fields[key];

            if ('type' in field && field.type === 'field') {
                shape[key] = field.schema;
                defaults[key] = field.defaultValue;
            } else {
                const nested = buildShape(field as SchemaShape);
                shape[key] = z.object(nested.shape);
                defaults[key] = nested.defaults;
            }
        }

        return {shape, defaults};
    };

    const {shape, defaults} = buildShape(fields);
    const schema = (refine) ? refine(z.object(shape) as any) : z.object(shape);

    return {
        schema: schema as ExtractZodSchema<T>,
        defaultValues: defaults as z.input<ExtractZodSchema<T>>
    };
}

export const createForm = <T extends z.ZodObject>(
    schema: { schema: T; defaultValues: z.input<T>; },
    options?: Omit<UseFormProps<z.input<T>, any, z.output<T>>, 'resolver'>
) => ({
    form: useForm<z.input<T>, any, z.output<T>>({
        ...options,
        defaultValues: merge(
            {},
            schema.defaultValues,
            options?.defaultValues
        ),
        resolver: zodResolver(schema.schema)
    }),
    name: (name: Path<z.input<T>>) => ({ name: name as string })
});

export const field = {
    string: <T extends z.ZodType<any, any, any>>(
        zodSchema: T = z.string() as unknown as T, 
        defaultValue: any = ''
    ) => ({
        type: 'field' as const,
        schema: z.preprocess(
            (v) => v ? String(v) : undefined, 
            z.union([z.string(), z.undefined()])
        ).pipe(zodSchema),
        defaultValue
    }),

    number: <T extends z.ZodType<any, any, any>>(
        zodSchema: T = z.number() as unknown as T,
        defaultValue: any = ''
    ) => ({
        type: 'field' as const,
        schema: z.preprocess(
            (v) => v ? Number(v) : undefined, 
            z.union([z.number(), z.undefined()])
        ).pipe(zodSchema),
        defaultValue
    }),

    custom: <T extends z.ZodTypeAny>(
        zodSchema: T, 
        defaultValue: any = undefined
    ) => ({
        type: 'field' as const,
        schema: zodSchema,
        defaultValue
    }),
};
