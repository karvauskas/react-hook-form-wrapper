import { ComponentType, ReactNode } from "react";
import { FieldError, FieldValues, Path } from "react-hook-form";
export interface FormControlWrapperProps<T extends FieldValues = FieldValues> {
    name: Path<T>;
    id?: string;
    label?: string;
    required?: boolean;
}
export interface FormControlProps extends Omit<FormControlWrapperProps, 'id'> {
    id: string;
    children: ReactNode;
}
export declare function withFormControl<F>(Field: ComponentType<F>): <T extends FieldValues = FieldValues>(props: F & FormControlWrapperProps<T>) => ReactNode;
export declare const FormControl: ({ name, id, label, children }: FormControlProps) => import("react/jsx-runtime").JSX.Element;
export declare const FieldLabel: import("react").MemoExoticComponent<({ label, id }: {
    label: string | null;
    id: string;
}) => import("react/jsx-runtime").JSX.Element | null>;
export declare const InvalidFeedbackMessage: ({ message, messageType }: {
    message?: string | null;
    messageType?: string | null;
}) => import("react/jsx-runtime").JSX.Element | null;
export declare const useFieldError: <T extends FieldValues>(name: Path<T>) => FieldError | null;
export declare const fieldBind: <T extends FieldValues>(name: Path<T>, isControlled?: boolean) => import("react-hook-form").ControllerRenderProps<T, Path<T>> | import("react-hook-form").UseFormRegisterReturn<Path<T>>;
