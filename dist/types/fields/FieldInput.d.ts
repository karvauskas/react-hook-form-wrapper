import { ComponentProps } from "react";
interface FieldProps extends Omit<ComponentProps<'input'>, 'name'> {
    name: string;
}
export declare const FieldInput: <T extends import("react-hook-form").FieldValues = import("react-hook-form").FieldValues>(props: FieldProps & import("../FormControl").FormControlWrapperProps<T>) => import("react").ReactNode;
export {};
