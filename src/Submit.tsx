import { ComponentProps } from "react";
import { useFormState } from "react-hook-form";

interface SubmitPorps extends Omit<ComponentProps<'button'>, 'type'> {
    label: string;
}

export const Submit = ({
    label, ...rest 
}: SubmitPorps) => {
    const { isDirty, isSubmitting } = useFormState();

    return (
        <button type="submit" disabled={!isDirty || isSubmitting} {...rest}>{label || ''}</button>
    );
};
