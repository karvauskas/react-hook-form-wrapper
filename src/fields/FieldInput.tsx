import { ComponentProps } from "react";
import { asFormComponent } from "../asFormComponent";

type FieldProps = Omit<ComponentProps<'input'>, 'name'>;

const Field = (props: FieldProps) => (
    <input type="text" {...props} />
);
Field.displayName = 'FieldInput';

export const FieldInput = asFormComponent(Field);
