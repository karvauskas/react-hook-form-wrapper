import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldControl, FieldControlProps, useFieldError } from "../FieldControl";

interface TextareaProps extends FieldControlProps, Omit<ComponentProps<'textarea'>, 'name'> {
    name: string;
}

export const TextareaField = ({ name, ...rest }: TextareaProps) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
        <FieldControl<'textarea'> error={error} {...rest}>
            {(props) => <textarea {...register(name)} {...props}></textarea>}
        </FieldControl>
    );
};
