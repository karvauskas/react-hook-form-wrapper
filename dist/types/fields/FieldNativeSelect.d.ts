import { ComponentProps } from "react";
interface FieldProps extends ComponentProps<'select'> {
    name: string;
}
export declare const FieldNativeSelect: ({ label, ...rest }: import("..").FieldComponentProps<import("react-hook-form").FieldValues> & FieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
