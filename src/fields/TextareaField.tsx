import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldControl, FormControlProps, useFieldError } from "../FieldControl";

interface TextareaProps extends ComponentProps<'textarea'>, FormControlProps {
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
