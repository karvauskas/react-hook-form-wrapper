import { ComponentProps, ElementType, ReactNode, useId } from "react";
import { Path, FieldError, FieldValues, useFormState } from "react-hook-form";
import classnames from "./utilities/classnames";

export interface BaseFieldControlProps {
    id?: string,
    label?: string;
    required?: boolean;
    fieldControl?: FieldControlElementProps;
};

interface FieldControlElementProps {
    fieldControlClassName?: string;
    fieldControlInvalidClassName?: string;
    fieldClassName?: string;
    fieldValidClassName?: string;
    fieldInvalidClassName?: string;
};

interface FieldControlProps<P extends ElementType = 'input'> extends Omit<BaseFieldControlProps, 'fieldControl'>, FieldControlElementProps {
    error: FieldError | undefined;
    children: (props: ComponentProps<P>) => ReactNode;
};

interface ErrorMessagesProps extends ComponentProps<'div'>{
    error?: FieldError;
}

export const FieldControl = <P extends ElementType = 'input'>({
    children, 
    error, 
    id,
    label, 
    required, 
    //
    fieldControlClassName = 'field-control',
    fieldControlInvalidClassName = 'has-errors',
    fieldClassName = 'field',
    fieldValidClassName = 'is-valid',
    fieldInvalidClassName = 'is-invalid'
}: FieldControlProps<P>) => {
    const { isSubmitted } = useFormState();

    console.log(label);

    const identifier = id || useId();
    const props = {
        id: identifier,
        className: classnames(
            fieldClassName
        )
    } as ComponentProps<P>;

    return (
        <div className={classnames(fieldControlClassName, {required: required, [fieldControlInvalidClassName]: !!error})}>
            {label && <label htmlFor={identifier}>{label}</label>}
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
