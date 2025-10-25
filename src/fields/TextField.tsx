import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldControl, FormControlProps, useFieldError } from "../FieldControl";

interface InputProps extends ComponentProps<'input'>, FormControlProps {
    name: string;
}

export const TextField = ({ name, type, ...rest }: InputProps) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
        <FieldControl error={error} {...rest}>
            {(props) => <input type={type || "text"} {...register(name)} {...props} />}
        </FieldControl>
    );
};
