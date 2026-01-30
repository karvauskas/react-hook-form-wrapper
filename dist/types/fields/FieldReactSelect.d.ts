import { Props } from "react-select";
interface FieldProps extends Props {
    name: string;
}
export declare const findSelectOptionsByValues: (values: any, options: Record<string, object>[]) => Record<string, object> | Record<string, object>[] | null;
export declare const FieldReactSelect: (props: FieldProps & import("..").FieldComponentProps<import("react-hook-form").FieldValues>) => import("react/jsx-runtime").JSX.Element;
export {};
