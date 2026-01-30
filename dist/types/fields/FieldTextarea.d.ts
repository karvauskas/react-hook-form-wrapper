import { ComponentProps } from "react";
interface FieldProps extends ComponentProps<'textarea'> {
    name: string;
}
export declare const FieldTextarea: ({ label, ...rest }: import("..").FieldComponentProps<import("react-hook-form").FieldValues> & FieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
