import { Props } from "react-select";
interface FieldProps extends Omit<Props, 'name'> {
    name: string;
}
export declare const FieldReactSelect: <T extends import("react-hook-form").FieldValues = import("react-hook-form").FieldValues>(props: FieldProps & import("../FormControl").FormControlWrapperProps<T>) => import("react").ReactNode;
export {};
