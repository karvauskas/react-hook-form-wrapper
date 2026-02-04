import { ComponentProps } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";

interface FieldProps<TFieldValues extends FieldValues> extends Omit<ComponentProps<'input'>, 'name'> {
    name: Path<TFieldValues>; 
}

const Field = <T extends FieldValues>({ name, type = 'text', ...rest }: FieldProps<T>) => {
    const { register } = useFormContext<T>();

    return (
        <input type={type} {...register(name)} {...rest} />
    );
};
Field.displayName = 'FieldInput';
export const FieldInput = withFieldControl(Field);
