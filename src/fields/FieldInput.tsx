import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";

interface FieldProps extends ComponentProps<'input'> {
    name: string
};

const Field = ({ name, type = 'text', ...rest }: FieldProps) => {
    const { register } = useFormContext();

    return (
        <input type={type} {...register(name)} {...rest} />
    );
};
Field.displayName = 'FieldInput';

export const FieldInput = withFieldControl(Field);
