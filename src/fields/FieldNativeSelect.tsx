import { ComponentProps } from "react";
import { withFormControl } from "../FormControl";

interface FieldProps extends Omit<ComponentProps<'select'>, 'name'> {
    name: string;
};

const Field = ({children, ...rest}: FieldProps) => (
    <select {...rest}>{children}</select>
);
Field.displayName = 'FieldNativeSelect';

export const FieldNativeSelect = withFormControl(Field); 
