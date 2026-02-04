import { useEffect, useRef } from "react";
import { Controller, useFormContext  } from "react-hook-form";
import { withFieldControl } from "../withFieldControl";
import Select, { Props } from "react-select";

const Field = ({ name, options = [], ...rest }: {name:string} & Omit<Props, 'name'>) => {
    const { resetField, formState: { defaultValues } } = useFormContext();
    const initialized = useRef(false);

    useEffect(() => {
        const parts: string[] = name.split('.');
        let defaultValue = defaultValues;
        for (const key of parts) defaultValue = defaultValue?.[key] || null;

        resetField(name, { defaultValue: findSelectOptionsByValues(defaultValue, options as Record<string, object>[]) });
        initialized.current = true;
    }, []);

    const className = rest?.className?.replace('field', '');

    return (
        <Controller
            name={name}
            render={
                ({ field }) => {
                    return (
                        <Select
                            {...field}
                            value={initialized.current && field.value}
                            inputId={rest?.id}
                            options={options || []}
                            classNamePrefix="react-select"
                            unstyled
                            {...rest}
                            className={[className, "react-select-container"].join(' ')}
                            id={undefined}
                        />
                    );
                }
            }
        />
    );
};
Field.displayName = 'FieldReactSelect';
export const FieldReactSelect = withFieldControl(Field);

export const findSelectOptionsByValues = (values: any, options: Record<string, object>[]) => {
    const flatten = (options: Record<string, object>[]): Record<string, object>[] => options.flatMap(
        option => option.options ? flatten(option.options as Record<string, object>[]) : [option]
    );

    const flat = flatten(options);

    if (Array.isArray(values)) {
        return flat.filter(option => values.includes(option.value)) || [];
    }

    return flat.find(option => option.value === values) || null;
};
