import { ComponentProps } from "react";
interface FieldProps extends ComponentProps<'textarea'> {
    name: string;
}
export declare const FieldTextarea: (props: FieldProps & import("..").FieldComponentProps<import("react-hook-form").FieldValues>) => import("react/jsx-runtime").JSX.Element;
export {};
