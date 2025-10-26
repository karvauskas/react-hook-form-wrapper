import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { BaseFieldControlProps, FieldControl, useFieldError } from "../FieldControl";

interface InputProps extends Omit<ComponentProps<'input'>, 'name'>, BaseFieldControlProps {
    name: string;
};

export const TextField = ({ name, type, label, id, fieldControl, ...rest }: InputProps) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
        <FieldControl<'input'> {...{error, label, id, ...fieldControl}}>
            {(props) => 
                <input type={type || "text"} {...register(name)} {...rest} {...props} />
            }
        </FieldControl>
    );
};
