import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { BaseFieldControlProps, FieldControl, useFieldError } from "../FieldControl";

interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'name'>, BaseFieldControlProps {
    name: string;
}

export const TextareaField = ({ name, label, id, fieldControl, ...rest }: TextareaProps) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
        <FieldControl<'textarea'> {...{error, label, id, ...fieldControl}}>
            {(props) => 
                <textarea {...register(name)} {...rest} {...props}></textarea>}
        </FieldControl>
    );
};
