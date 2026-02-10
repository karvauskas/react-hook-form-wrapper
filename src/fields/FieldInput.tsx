import { ComponentProps } from "react";
import { fieldBind, withFormControl } from "../FormControl";

interface FieldProps extends Omit<ComponentProps<'input'>, 'name'> {
    name: string; 
}

const Field = ({name, type = 'text', ...rest}: FieldProps) => (
    <input type={type} {...rest} {...fieldBind(name)}/>
);
Field.displayName = 'FieldInput';

export const FieldInput = withFormControl(Field);
