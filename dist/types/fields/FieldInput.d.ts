import { ComponentProps } from "react";
interface FieldProps extends ComponentProps<'input'> {
    name: string;
}
export declare const FieldInput: ({ label, ...rest }: import("..").FieldComponentProps<import("react-hook-form").FieldValues> & FieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
