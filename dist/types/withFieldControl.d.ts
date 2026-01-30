import { ComponentType } from "react";
import { FieldValues, Path } from "react-hook-form";
export interface FieldComponentProps<T extends FieldValues = FieldValues> {
    name: Path<T>;
    id?: string;
    label?: string;
    required?: boolean;
}
interface FieldControlProps extends Omit<FieldComponentProps, 'name'> {
    hasError: boolean;
    isSubmitted: boolean;
    children: React.ReactNode;
}
export declare function withFieldControl<T extends FieldValues = FieldValues>(Field: ComponentType<T>): (props: T & FieldComponentProps) => import("react/jsx-runtime").JSX.Element;
export declare const FieldControl: import("react").MemoExoticComponent<({ id, label, required, hasError, isSubmitted, children }: FieldControlProps) => import("react/jsx-runtime").JSX.Element>;
export {};
