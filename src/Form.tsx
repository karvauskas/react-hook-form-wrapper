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
    form, children, ...rest 
}: FormProps<T>) => {
    const submitter = rest?.onSubmit || onFormSubmit<T>(rest?.action ?? '', rest?.method);

    return (
        <FormProvider {...form}>
            <form 
                noValidate 
                {...rest}
                onSubmit={form.handleSubmit(submitter)} 
            >
                <fieldset>
                    {children}
                </fieldset>
            </form>
        </FormProvider>
    );
};

export function createZodForm<TSchema extends z.ZodType<any, any, any>, TContext = any> (
    schema: TSchema,
    options?: Omit<UseFormProps<z.input<TSchema>, TContext>, 'resolver'>
) {
    return useForm<z.input<TSchema>, TContext, z.output<TSchema>>({
        ...options,
        resolver: zodResolver(schema)
    } as any) as UseFormReturn<z.input<TSchema>, TContext, z.output<TSchema>>;
}
