import { ComponentType, ReactNode, memo, useId } from "react";
import { FieldError, FieldValues, get, Path, useController, useFormContext, useFormState } from "react-hook-form";

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

export function withFormControl<F>(Field: ComponentType<F>) {
    const FormControlWrapper = <T extends FieldValues = FieldValues>(props: F & FormControlWrapperProps<T>) => {
        if (!props?.name) return null;

        const {name, label, id, ...rest} = props;
        const fieldId = id || useId();

        console.log('wrapper');

        return (
            <FormControl {...{name, label, id: fieldId}}>
                <Field name={name} {...rest as F} id={fieldId}/>
            </FormControl>
        );
    };
    FormControlWrapper.displayName = 'withFormControl';
    
    return memo(FormControlWrapper) as <T extends FieldValues = FieldValues>(
        props: F & FormControlWrapperProps<T>
    ) => ReactNode;
}

export const FormControl = (
    {name, id, label, children}: FormControlProps
) => {
    const error = useFieldError(name);

    return (
        <div className="form-control">
            <FieldLabel label={label || null} id={id}/>
            {children}
            <InvalidFeedbackMessage 
                message={error?.message || null} 
                messageType={error?.type || null}/>
        </div>
    );
}

export const FieldLabel = memo((
    {label, id}: {label: string | null, id: string}
) => {
    if (!label) return null;
    
    return (
        <label htmlFor={id}>{label}</label>
    );
});
FieldLabel.displayName = 'FieldLabel';

export const InvalidFeedbackMessage = (
    {message, messageType} : {message?: string | null, messageType?: string | null}
) => {
    if (!message) return null;

    return (
        <div className="invalid-feedback" data-feedback-type={messageType}>
            {message}
        </div>
    );
};

export const useFieldError = <T extends FieldValues>(
    name: Path<T>
): FieldError | null => {
    const {errors} = useFormState<T>({name});
    return get(errors, name) || null;
}

export const fieldBind = <T extends FieldValues>(
    name: Path<T>,
    isControlled: boolean = false
) => {
    const {register, control} = useFormContext<T>();

    if (isControlled) {
        const {field} = useController<T>({name, control});
        return field;
    }

    return register(name);
}
