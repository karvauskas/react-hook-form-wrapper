import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldControl, FieldControlProps, useFieldError } from "../FieldControl";

interface SelectProps extends FieldControlProps, Omit<ComponentProps<'select'>, 'name'> {
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
