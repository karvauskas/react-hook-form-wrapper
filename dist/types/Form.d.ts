import { ComponentProps } from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
type HttpMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
interface FormProps<Tin extends FieldValues, Tout extends FieldValues = Tin> extends Omit<ComponentProps<'form'>, 'action' | 'method' | 'onSubmit'> {
    form: UseFormReturn<Tin, any, Tout>;
    action: string;
    method?: HttpMethod;
    onSubmit?: SubmitHandler<Tout>;
    disabled?: boolean;
}
export declare const Form: <Tin extends FieldValues, Tout extends FieldValues = Tin>({ form, children, disabled, ...rest }: FormProps<Tin, Tout>) => import("react/jsx-runtime").JSX.Element;
export {};
