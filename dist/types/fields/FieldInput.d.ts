import { ComponentProps } from "react";
interface FieldProps extends ComponentProps<'input'> {
    name: string;
}
export declare const FieldInput: (props: FieldProps & import("..").FieldComponentProps<import("react-hook-form").FieldValues>) => import("react/jsx-runtime").JSX.Element | undefined;
export {};
