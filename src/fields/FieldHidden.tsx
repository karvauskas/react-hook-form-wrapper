import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface FieldProps extends Omit<ComponentProps<'input'>, 'type'> {
    name: string
};

export const FieldHidden = ({ name, ...rest }: FieldProps) => {
    const { register } = useFormContext();

    return (
        <input type="hidden" {...register(name)} {...rest} />
    );
};

