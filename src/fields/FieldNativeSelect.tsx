import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";

interface FieldProps extends ComponentProps<'select'> {
    name: string
};

const Field = ({name, children, ...rest }: FieldProps) => {
    const { register } = useFormContext();

    return (
        <select {...register(name)} {...rest}>{children}</select>
    );
};
Field.displayName = 'FieldNativeSelect';

export const FieldNativeSelect = withFieldControl(Field);
