import { ComponentProps } from "react";
interface FieldProps extends Omit<ComponentProps<'select'>, 'name'> {
    name: string;
}
export declare const FieldNativeSelect: <T extends import("react-hook-form").FieldValues = import("react-hook-form").FieldValues>(props: FieldProps & import("../FormControl").FormControlWrapperProps<T>) => import("react").ReactNode;
export {};
