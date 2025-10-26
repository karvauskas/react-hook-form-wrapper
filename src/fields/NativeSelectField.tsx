import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { BaseFieldControlProps, FieldControl, useFieldError } from "../FieldControl";

interface SelectProps extends Omit<ComponentProps<'select'>, 'name'>, BaseFieldControlProps {
    name: string;
};

export const NativeSelectField = ({ name, label, id, children, fieldControl, ...rest }: SelectProps) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
        <FieldControl<'select'> {...{error, label, id, ...fieldControl}}>
            {(props) => (
                <select {...register(name)} {...rest} {...props}>
                    {children}
                </select>
            )}
        </FieldControl>
    );
};
