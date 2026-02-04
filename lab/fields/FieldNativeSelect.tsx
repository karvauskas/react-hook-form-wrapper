import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";

const Field = ({name, children, ...rest }: {name: string} & Omit<ComponentProps<'select'>, 'name'>) => {
    const { register } = useFormContext();

    return (
        <select {...register(name)} {...rest}>{children}</select>
    );
};
Field.displayName = 'FieldNativeSelect';
export const FieldNativeSelect = withFieldControl(Field);
