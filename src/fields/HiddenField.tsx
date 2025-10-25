import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends Omit<ComponentProps<'input'>, 'type'> {
    name: string;
}

export const HiddenField = ({ name, ...rest }: InputProps) => {
    const { register } = useFormContext();

    return (
        <input type="hidden" {...register(name)} {...rest} />
    );
};
