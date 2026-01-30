import { Props } from "react-select";
interface FieldProps extends Props {
    name: string;
}
export declare const findSelectOptionsByValues: (values: any, options: Record<string, object>[]) => Record<string, object> | Record<string, object>[] | null;
export declare const FieldReactSelect: ({ label, ...rest }: import("..").FieldComponentProps<import("react-hook-form").FieldValues> & FieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
