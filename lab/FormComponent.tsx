import { ComponentType, memo, ReactNode, useId, useMemo } from "react";
import { FieldError, FieldValues, get, Path, useController, useFormContext, useFormState } from "react-hook-form";

export interface FormComponentProps<T extends FieldValues = FieldValues> {
    name: Path<T>;
    label?: string;
    required?: boolean;
    addons?: {
        prepend?: ReactNode[] | string,
        append?: ReactNode[] | string
    }
}

export interface FormControlProps extends Omit<FormComponentProps, 'addons'> {
    id: string;
    children: (props: Record<string, unknown>) => ReactNode;
}

export function asFormComponent<P extends {id?: string}>(
    Field: ComponentType<P>
) {
    const FormComponent = memo(<T extends FieldValues = FieldValues>(props: P & FormComponentProps<T>) => {
        if (!props?.name) { return null; }

        const { label, name, addons, ...rest } = props;
        const id = rest?.id as string || useId();

        return (
            <FormControl {...{id, name, label}}>
                {(props) => (
                    <Field name={name} {...rest as P} {...props as P}/>
                )}
            </FormControl>
        ); 
    });
    FormComponent.displayName = 'FormComponent';

    return FormComponent;
}

export const FormControl = ({
    name, id, label, children
}: FormControlProps) => {
    const {error} = getFieldError(name)

    return (
        <div className="form-control">
            {label && <label htmlFor={id}>{label || null}</label>}
            {children({id})}

            {error &&
                <div className="invalid-feedback" data-error-type={error?.type}>
                    {error?.message}
                </div>
            }
        </div>
    );
};

export const getFieldError = <T extends FieldValues>(
    name: Path<T>
): {error: FieldError | undefined, isSubmitted: boolean} => {
    const {errors, isSubmitted} = useFormState<T>({name});
    return {error: get(errors, name), isSubmitted};
};

export const fieldBinder = <T extends FieldValues>(
    name: Path<T>,
    isControlled: boolean = false
) => {
    const { register, control } = useFormContext<T>();

    if (isControlled) {
        const { field } = useController({ name, control });
        return field;
    }

    return register(name);
};
