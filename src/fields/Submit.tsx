import { ComponentProps, memo } from "react";
import { useFormState } from "react-hook-form";

interface SubmitProps extends Omit<ComponentProps<'button'>, 'type'> {
    label?: string;
    autoHide?: boolean;
};

export const Submit = memo((
    {label, autoHide = false, ...rest }: SubmitProps
) => {
    const { isDirty, isSubmitting, isLoading } = useFormState();

    if (autoHide && !isDirty) return null;

    return (
        <button type="submit" {...rest}>{label || null}</button>
    );
});
