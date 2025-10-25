import React from "react";
import { Controller } from "react-hook-form";
import Select, { Props } from "react-select";
import { FieldControl, FormControlProps, useFieldError } from "../FieldControl";

interface ReactSelectProps extends FormControlProps, Props {
    name: string;
};

export const ReactSelectField = ({ name, options, ...rest }: ReactSelectProps) => {
    const error = useFieldError(name);

    return (
        <FieldControl<Select> error={error} {...rest}>
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
                                {...{...props, id: undefined}}
                            />
                        )
                    }
                />
            )}
        </FieldControl>
    );
};
