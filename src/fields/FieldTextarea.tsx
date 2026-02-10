import { ComponentProps } from "react";
import { fieldBind, withFormControl } from "../FormControl";

interface FieldProps extends Omit<ComponentProps<'textarea'>, 'name'> {
    name: string;
};

const Field = ({name, ...rest}: FieldProps) => (
    <textarea {...rest} {...fieldBind(name)}></textarea>
);
Field.displayName = 'FieldTextarea';

export const FieldTextarea = withFormControl(Field);
