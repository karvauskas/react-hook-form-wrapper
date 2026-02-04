import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";

const Field = ({ name, ...rest }: {name: string;} & Omit<ComponentProps<'textarea'>, 'name'>) => {
    const { register } = useFormContext();

    return (
        <textarea {...register(name)} {...rest}></textarea>
    );
};
Field.displayName = 'FieldTextarea';
export const FieldTextarea = withFieldControl(Field);
