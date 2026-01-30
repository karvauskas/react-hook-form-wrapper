import { ComponentProps } from "react";
interface FieldProps extends ComponentProps<'select'> {
    name: string;
}
export declare const FieldNativeSelect: (props: FieldProps & import("..").FieldComponentProps<import("react-hook-form").FieldValues>) => import("react/jsx-runtime").JSX.Element;
export {};
