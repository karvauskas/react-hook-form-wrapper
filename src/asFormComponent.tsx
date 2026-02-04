import { ComponentType } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

export interface FormComponentProps<T extends FieldValues = FieldValues> {
    name: Path<T>;
    label?: string;
}

export function asFormComponent<P>(Field: ComponentType<P>) {
    return function FormComponent<T extends FieldValues = FieldValues>(props: P & FormComponentProps<T>) {
        const {register} = useFormContext<T>();
        const { label, name, ...fieldProps } = props;

        return (
            <div>
                <Field {...fieldProps as P} {...register(name)}/>
            </div>
        );
    }
}

export function asControlledFormComponent<P>(Field: ComponentType<P>) {
    return function FormComponent<T extends FieldValues = FieldValues>(props: P & FormComponentProps<T>) {
        const { label, name, ...fieldProps } = props;

        return (
            <div>
                <Field name={name} {...fieldProps as P}/>
            </div>
        );
    }
}

export const FormControl = ({
}) => {
    return (
        <div>abc</div>
    );
}
