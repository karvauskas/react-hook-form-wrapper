import { DatePickerProps } from "react-datepicker";
type FieldProps = {
    name: string;
} & DatePickerProps;
export declare const FieldDatepicker: ({ label, ...rest }: import("..").FieldComponentProps<import("react-hook-form").FieldValues> & FieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
