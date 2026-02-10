import Select, { Props } from "react-select";
import { fieldBind, withFormControl } from "../FormControl";

interface FieldProps extends Omit<Props, 'name'> {
    name: string;
};

const Field = ({name, ...rest}: FieldProps) => {
    const bindings = fieldBind(name, true);

    return (
        <Select
            {...rest}
            {...bindings as any}
            classNamePrefix="react-select"
            inputId={rest?.id}
            id={undefined}
        />
    );
};
Field.displayName = 'FieldNativeSelect';

export const FieldReactSelect = withFormControl(Field); 
