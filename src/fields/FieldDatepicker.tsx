import React from "react";
import { Controller  } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";
import DatePicker, { DatePickerProps } from "react-datepicker";

type FieldProps = {
    name: string
} & DatePickerProps;

const Field = ({ name, ...rest }: FieldProps) => {
    return (
        <Controller
            name={name}
            render={
                ({ field }) => {
                    return (
                        <DatePicker {...field} {...rest} selected={field.value || null}/>
                    );
                }
            }
        />
    );
};
Field.displayName = 'FieldDatepicker';

export const FieldDatepicker = withFieldControl(Field);
