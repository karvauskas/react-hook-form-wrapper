import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";

interface FieldProps extends ComponentProps<'textarea'> {
    name: string
};

const Field = ({ name, ...rest }: FieldProps) => {
    const { register } = useFormContext();

    return (
        <textarea {...register(name)} {...rest}></textarea>
    );
};
Field.displayName = 'FieldTextarea';

export const FieldTextarea = withFieldControl(Field);
