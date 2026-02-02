import { ComponentType, ReactNode } from "react";
import { FieldError, FieldValues, Path } from "react-hook-form";
export interface FieldComponentProps<T extends FieldValues = FieldValues> {
    name: Path<T>;
    id?: string;
    label?: string;
    required?: boolean;
    addons?: {
        prepend?: ReactNode[];
        append?: ReactNode[];
    };
}
interface FieldControlProps extends Omit<FieldComponentProps, 'name'> {
    error: FieldError | undefined;
    isSubmitted: boolean;
    children: ReactNode;
}
export declare function withFieldControl<T extends FieldValues = FieldValues>(Field: ComponentType<T>): (props: T & FieldComponentProps) => import("react/jsx-runtime").JSX.Element | undefined;
export declare const FieldControl: import("react").MemoExoticComponent<({ children, id, label, required, error, isSubmitted, addons }: FieldControlProps) => import("react/jsx-runtime").JSX.Element>;
export declare const useFieldError: <T extends FieldValues>(name: Path<T>) => FieldError | undefined;
export {};
