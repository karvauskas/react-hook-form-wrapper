import { ComponentProps } from "react";
import { useFormState } from "react-hook-form";

interface SubmitProps extends Omit<ComponentProps<'button'>, 'type'> {
    label?: string
};

export const Submit = ({label, ...rest }: SubmitProps) => {
    const { isDirty, isSubmitting } = useFormState();

    return (
        <button type="submit" disabled={!isDirty || isSubmitting} {...rest}>
            {label || ''}
        </button>
    );
};
