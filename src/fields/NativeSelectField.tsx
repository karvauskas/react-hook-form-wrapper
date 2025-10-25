import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldControl, FormControlProps, useFieldError } from "../FieldControl";

interface SelectProps extends FormControlProps, ComponentProps<'select'> {
    name: string;
};

export const NativeSelectField = ({ name, children, ...rest }: SelectProps) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
        <FieldControl<'select'> error={error} {...rest}>
            {(props) => (
                <select {...register(name)} {...props}>
                    {children}
                </select>
            )}
        </FieldControl>
    );
};
