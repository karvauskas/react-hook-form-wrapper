import { Controller } from "react-hook-form";
import Select, { Props } from "react-select";
import { BaseFieldControlProps, FieldControl, useFieldError } from "../FieldControl";

interface ReactSelectProps extends Props, BaseFieldControlProps {
    name: string;
};

export const ReactSelectField = ({ name, label, id, options, fieldControl, ...rest }: ReactSelectProps) => {
    const error = useFieldError(name);

    return (
        <FieldControl<typeof Select> {...{error, label, id, ...fieldControl}}>
            {(props) => (
                <Controller
                    name={name}
                    render={
                        ({ field }) => (
                            <Select
                                {...field}
                                options={options || []}
                                inputId={props?.id}
                                unstyled
                                className="react-select-container"
                                classNamePrefix="react-select"
                                isClearable
                                {...rest}
                                {...{...props, id: undefined}}
                            />
                        )
                    }
                />
            )}
        </FieldControl>
    );
};
