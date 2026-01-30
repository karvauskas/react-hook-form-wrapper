import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm, UseFormProps, UseFormReturn, useFormState } from "react-hook-form";
import z from "zod";

type httpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface FormProps<T extends FieldValues> 
extends Omit<ComponentProps<'form'>, 'action' | 'method' | 'onSubmit'> {
    form: UseFormReturn<T>,
    action?: string,
    method?: httpMethod,
    onSubmit?: SubmitHandler<T>
};

const onFormSubmit = <T extends FieldValues>(
    action: string,
    method: httpMethod
): SubmitHandler<T> => async (formData) => {
    console.log(formData);
    await fetch(action, {
        method: method,
        body: JSON.stringify(formData)
    }).then(async (response) => {
        console.log(response);
    });
};

export const Form = <T extends FieldValues>({ 
    form, children, action, method = 'post', onSubmit, ...rest 
}: FormProps<T>) => {
    const submitter = onSubmit || onFormSubmit<T>(action ?? '', method);

    return (
        <FormProvider {...form}>
            <form 
                action={action} 
                method={method} 
                onSubmit={form.handleSubmit(submitter)} 
                noValidate 
                {...rest}
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
