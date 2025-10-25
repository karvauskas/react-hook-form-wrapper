import { ComponentProps, ElementType, ReactNode, useId } from "react";
import { Path, FieldError, FieldValues, useFormState } from "react-hook-form";

export interface FormControlProps {
    id?: string,
    label?: string;
    required?: boolean;
};

interface InternalFormControlProps<P extends ElementType = 'input'> extends FormControlProps {
    error: FieldError | undefined;
    children: (props: ComponentProps<P>) => ReactNode;
};

interface ErrorMessagesProps extends ComponentProps<'div'>{
    error?: FieldError;
}

export const FieldControl = <P extends ElementType = 'input'>({
    children, error, label, required, ...rest
}: InternalFormControlProps<P>) => {
    const { isSubmitted } = useFormState();

    const id = rest?.id || useId();
    const props = {
        ...rest,
        id
    } as ComponentProps<P>;

    return (
        <div className="field-control">
            {label && <label htmlFor={id}>{label}</label>}
            {children(props)}
            <ErrorMessages error={error}/>
        </div>
    );
};

export const useFieldError = <T extends FieldValues>(name: Path<T>): FieldError | undefined => {
    const { errors } = useFormState<T>({ name });

    let error: any = errors;
    for (const key of name.split('.')) {
        if (!error) return undefined;
        error = error[key];
    }

    return error as FieldError | undefined;
};

const ErrorMessages = ({error, ...rest}: ErrorMessagesProps) => {
    if (!error) {
        return null;
    }

    return (
        <div data-error-type={error?.type} {...rest}>
            {error?.message || '-'}
        </div>
    );
};
