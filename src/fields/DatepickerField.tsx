import { Component, ComponentProps } from "react";
import { Controller } from "react-hook-form";
import DatePicker, { DatePickerProps } from "react-datepicker";
import { FieldControl, FieldControlProps, useFieldError } from "../FieldControl";

export type DatepickerFieldProps =
  FieldControlProps &
  Omit<DatePickerProps, 'id'> & {
    name: string;
  };

export const DatepickerField = ({ name, ...rest }: DatepickerFieldProps) => {
    const error = useFieldError(name);

    return (
        <FieldControl<typeof DatePicker> error={error} {...rest}>
            {(props) => (
                <Controller
                    name={name}
                    render={
                        ({ field: { onChange, onBlur, value, ref } }) => (
                            <DatePicker
                                onChange={onChange}
                                onBlur={onBlur}
                                selected={value ?? null}
                                dateFormat={'yyyy-MM-dd'}
                                autoComplete="off"
                                {...props}
                            />
                        )
                    }
                />
            )}
        </FieldControl>
    );
};
