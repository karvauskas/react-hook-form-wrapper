import { ComponentProps } from "react";
import { FieldValues, SubmitHandler, UseFormProps, UseFormReturn } from "react-hook-form";
import z from "zod";
type httpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
interface FormProps<T extends FieldValues> extends Omit<ComponentProps<'form'>, 'action' | 'method' | 'onSubmit'> {
    form: UseFormReturn<T>;
    action: string;
    method?: httpMethod;
    onSubmit?: SubmitHandler<T>;
}
interface SchemaReturn {
    schema: z.ZodObject<Record<string, z.ZodType>>;
    defaultValues: Record<string, any>;
}
interface FieldReturn<T extends z.ZodType = z.ZodType> {
    schema: T;
    defaultValue: z.infer<T> | undefined;
}
interface Fields {
    [key: string]: FieldReturn | Fields;
}
export declare const Form: <T extends FieldValues>({ form, children, disabled, ...rest }: FormProps<T> & {
    disabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare function createForm<TSchema extends z.ZodType<any, any, any>, TContext = any>(schema: SchemaReturn, options?: Omit<UseFormProps<z.input<TSchema>, TContext>, 'resolver'>): UseFormReturn<z.input<TSchema>, TContext, z.output<TSchema>>;
export declare function createSchema(fields: Fields): SchemaReturn;
export declare const field: {
    string: <T extends z.ZodType<string | undefined> = z.ZodString>(schema?: T, def?: any) => {
        schema: z.ZodPipe<z.ZodTransform<string | undefined, unknown>, T>;
        defaultValue: any;
    };
    number: <T extends z.ZodType<number | undefined> = z.ZodNumber>(schema?: T, def?: any) => {
        schema: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, T>;
        defaultValue: any;
    };
};
export {};
