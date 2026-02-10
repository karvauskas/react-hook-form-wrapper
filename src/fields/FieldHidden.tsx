import { ComponentProps } from "react";
import { fieldBind } from "../FormControl";

interface FieldProps extends Omit<ComponentProps<'input'>, 'name'|'type'> {
    name: string;
};

export const FieldHidden = ({ name, ...rest }: FieldProps) => (
    <input type="hidden" {...rest} {...fieldBind(name)} />
);
