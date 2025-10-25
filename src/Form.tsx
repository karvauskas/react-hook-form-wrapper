import { ComponentProps, ReactNode } from "react";
import {
    FormProvider,
    FieldValues,
    UseFormReturn,
    SubmitHandler,
    useFormState,
    FieldError
} from "react-hook-form";

type httpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface FormProps<T extends FieldValues>
    extends Partial<Omit<ComponentProps<'form'>, 'onSubmit' | 'method'>> {
    form: UseFormReturn<T>;
    action: string;
    disabled?: boolean;
    method?: httpMethod;
    onSubmit?: SubmitHandler<T>;
};

const onFormSubmit = <T extends FieldValues>(
    form: UseFormReturn<T>,
    action: string,
    method: httpMethod,
): SubmitHandler<T> => async (formData) => {
    await fetch(action || '/', {
        method: method,
        body: JSON.stringify(formData)
    }).then(async (response) => {
        console.log(response);
        form.setError('root.server', { type: 'server-exception', message: 'root server error' });
    }).catch(
        (error) => console.log(error)
    );
};

export const Form = <T extends FieldValues>({
    form, action, children, disabled, method = 'post', onSubmit, ...props
}: FormProps<T>) => {
    const submitter = onSubmit || onFormSubmit<T>(form, action, method);

    return (
        <FormProvider {...form}>
            <form
                method={method}
                action={action}
                onSubmit={form.handleSubmit(submitter)}
                noValidate
                {...props}
            >
                <RootErrorMessages />
                <fieldset className="form-root-fieldset" disabled={disabled}>{children}</fieldset>
            </form>
        </FormProvider>
    );
};

const RootErrorMessages = () => {
    const { errors } = useFormState({ name: 'root' });
    const rootErrors = errors?.root as Record<string, FieldError> | undefined;

    if (!rootErrors) {
        return null;
    }

    return (
        <ul>
            {Object.entries(rootErrors).map(
                ([key, error]) => (
                    <li key={key} data-error-type={error?.type}>
                        {error?.message}
                    </li>
                )
            )}
        </ul>
    );
};
