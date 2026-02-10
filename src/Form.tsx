import { ComponentProps } from "react";
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

type HttpMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

interface FormProps<Tin extends FieldValues, Tout extends FieldValues = Tin>
extends Omit<ComponentProps<'form'>, 'action' | 'method' | 'onSubmit'>
{
    form: UseFormReturn<Tin, any, Tout>;
    action: string;
    method?: HttpMethod;
    onSubmit?: SubmitHandler<Tout>;
    disabled?: boolean;
}

export const Form = <Tin extends FieldValues, Tout extends FieldValues = Tin>({
    form, children, disabled = false, ...rest
}: FormProps<Tin, Tout>) => (
    <FormProvider {...form}>
        <form 
            noValidate {...rest}
            onSubmit={form.handleSubmit(
                rest?.onSubmit || 
                onFormSubmit<Tout>(rest?.action || '', rest?.method)
            )}>
            <fieldset className="form-scope" disabled={disabled}>
                {children}
            </fieldset>
        </form>
    </FormProvider>
);

const onFormSubmit = <T extends FieldValues>(
    action: string,
    method: HttpMethod = 'POST'
): SubmitHandler<T> => 
    async (data: T) =>  {
        console.log(data);
        
        const formData = new FormData();
        for (const key in data) {
            console.log(data[key]);
            formData.append(key, data[key]);
        }
        //console.log(...formData);

        await fetch(action, {
            method: method,
            body: JSON.stringify(data)
        }).then(async (response) => {
            console.log(response);
        });
};
