import { Controller } from "react-hook-form";
import DatePicker, { DatePickerProps } from "react-datepicker";
import { BaseFieldControlProps, FieldControl, useFieldError } from "../FieldControl";

export type DatepickerFieldProps = Omit<DatePickerProps, 'label' | 'name' | 'onChange' | 'onBlur' | 'selected'> & BaseFieldControlProps & {
    name: string;
};

export const DatepickerField = ({ name, label, id, fieldControl, ...rest }: DatepickerFieldProps) => {
    const error = useFieldError(name);

    return (
        <FieldControl<typeof DatePicker> {...{error, label, id, ...fieldControl}}>
            {(props) => (
                <Controller
                    name={name}
                    render={
                        ({ field }) => {
                            const { onChange, onBlur, value } = field;

                            const merged = {
                                onChange,
                                onBlur,
                                selected: value ?? null,
                                dateFormat: 'yyyy-MM-dd',
                                autoComplete: 'off',
                                ...rest,
                                ...props,
                            };

                            return <DatePicker {...(merged as DatePickerProps)} />
                        }
                    }
                />
            )}
        </FieldControl>
    );
};
