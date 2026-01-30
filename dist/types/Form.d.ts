import { ComponentProps } from "react";
import { FieldValues, SubmitHandler, UseFormProps, UseFormReturn } from "react-hook-form";
import z from "zod";
type httpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
interface FormProps<T extends FieldValues> extends Omit<ComponentProps<'form'>, 'action' | 'method' | 'onSubmit'> {
    form: UseFormReturn<T>;
    action?: string;
    method?: httpMethod;
    onSubmit?: SubmitHandler<T>;
}
export declare const Form: <T extends FieldValues>({ form, children, action, method, onSubmit, ...rest }: FormProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare function createZodForm<TSchema extends z.ZodType<any, any, any>, TContext = any>(schema: TSchema, options?: Omit<UseFormProps<z.input<TSchema>, TContext>, 'resolver'>): UseFormReturn<z.input<TSchema>, TContext, z.output<TSchema>>;
export {};
