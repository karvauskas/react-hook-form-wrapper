import { useId, ComponentType, memo, ReactNode } from "react";
import { FieldError, FieldValues, Path, useFormState } from "react-hook-form";
import classnames from "./utils/classnames";

export interface FieldComponentProps<T extends FieldValues = FieldValues> {
    name: Path<T>,
    id?: string,
    label?: string,
    required?: boolean,
    addons?: {
        prepend?: ReactNode[],
        append?: ReactNode[]
    }
}

interface FieldControlProps extends Omit<FieldComponentProps, 'name'> {
    error: FieldError | undefined,
    isSubmitted: boolean,
    children: ReactNode
}

export function withFieldControl<T extends FieldValues = FieldValues>(Field: ComponentType<T>) {
    const FieldComponent = (props: T & FieldComponentProps) => {
        if (!props?.name) { return; }

        const { isSubmitted } = useFormState<T>();
        const error = useFieldError(props?.name ?? '');
        //
        const id = props?.id || useId();
        const className = [props?.className, 'field'].filter(n => n).join(' ');

        const {label, addons, ...fieldProps} = props;

        console.log(props?.name);

        return (
            <FieldControl
                label={label}
                id={id}
                required={props?.required || false}
                error={error}
                isSubmitted={isSubmitted}
                addons={addons}
            >
                <Field 
                    {...fieldProps as T} id={id} 
                    className={className}
                    aria-invalid={!!error ? true : null}
                />
            </FieldControl>
        );
    };

    return FieldComponent;
}

export const FieldControl = memo(
    ({children, id, label, required, error, isSubmitted, addons }: FieldControlProps) => {
        return (
            <div className={classnames('form-control', { 'required': required, 'is-invalid': !!error, 'is-valid': (!error && isSubmitted) })}>
                {label && <label htmlFor={id}>{label || null}</label>}
                {addons ? <FieldWithAddons addons={addons}>{children}</FieldWithAddons> : children}
                {error && <ErrorMessage error={error} />}
            </div>
        );
    }
);
FieldControl.displayName = 'FieldControl';

const FieldWithAddons = (
    {children, addons: {prepend, append}}: {children: ReactNode, addons: {prepend?: ReactNode[], append?: ReactNode[]}}
) => {
    const renderAddonsComponent = (addons: ReactNode[] = []) => addons.map((addon, i) => {
        return (
            <div key={`addon-${i}`} className={classnames('field-addon', {'field-addon-text': typeof addon === 'string'})}>
                {addon}
            </div>
        );
    });

    return (
        <div className="with-addons">
            {renderAddonsComponent(prepend)}
            {children}
            {renderAddonsComponent(append)}
        </div>
    );
}


export const useFieldError = <T extends FieldValues>(name: Path<T>): FieldError | undefined => {
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
        return error && <div className="invalid-feedback" data-error-type={error?.type || null}>{error?.message || null}</div>;
    }
);
ErrorMessage.displayName = 'ErrorMessage';
