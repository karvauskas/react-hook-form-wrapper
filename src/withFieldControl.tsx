import { useId, ComponentType, memo } from "react";
import { FieldError, FieldValues, Path, useFormState } from "react-hook-form";
import classnames from "./utils/classnames";

export interface FieldComponentProps<T extends FieldValues = FieldValues> {
    name: Path<T>,
    id?: string,
    label?: string,
    required?: boolean
}

interface FieldControlProps extends Omit<FieldComponentProps, 'name'> {
    hasError: boolean,
    isSubmitted: boolean,
    children: React.ReactNode
}

export function withFieldControl<T extends FieldValues = FieldValues>(Field: ComponentType<T>) {
    const FieldComponent = (props: T & FieldComponentProps) => {
        const { isSubmitted } = useFormState<T>();
        const error = useFieldError(props?.name ?? '');
        //
        const id = props?.id || useId();

        return (
            <FieldControl
                label={props?.label} 
                id={id}
                required={props?.required || false}
                hasError={!!error}
                isSubmitted={isSubmitted}
            >
                <Field {...props as T} label={null} id={id} />
                {error && <ErrorMessage error={error} />}
            </FieldControl>
        );
    };

    return FieldComponent;
}

export const FieldControl = memo(
    ({ id, label, required, hasError, isSubmitted, children }: FieldControlProps) => {
        return (
            <div className={classnames('field-control', { 'required': required, 'is-invalid': hasError, 'is-valid': (!hasError && isSubmitted) })}>
                {label && <label htmlFor={id}>{label || null}</label>}
                {children}
            </div>
        );
    }
);
FieldControl.displayName = 'FieldControl';


const useFieldError = <T extends FieldValues>(name: Path<T>): FieldError | undefined => {
    const { errors, isSubmitted } = useFormState<T>({ name });

    if (!isSubmitted) {
        return undefined;
    }

    const parts: string[] = name.split('.');
    let error: any = errors;
    for (const key of parts) error = error?.[key] || undefined;

    if (Array.isArray(error)) {
        error = error[0];
    }

    return error as FieldError | undefined;
};

const ErrorMessage = memo(
    ({ error }: { error: FieldError | undefined }) => {
        return error && <div className="field-error" data-error-type={error?.type || null}>{error?.message || null}</div>;
    }
);
ErrorMessage.displayName = 'ErrorMessage';
