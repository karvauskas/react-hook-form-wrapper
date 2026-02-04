import React, { useEffect, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";

class ServerError extends Error {
    code: unknown;

    constructor(message: string, code: unknown, options?: ErrorOptions) {
        super(message, options);
        this.code = code;
        this.name = "ServerError";
    }
}

const FormLoadingIndicator = ({ templateId }: {templateId: string}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const template = document.getElementById(templateId) as HTMLTemplateElement | null;
        if (template && ref.current) {
            ref.current.innerHTML = '';
            ref.current.appendChild(
                template.content.cloneNode(true)
            );
        }
    }, []);

    return <div ref={ref} className="form-loading-indicator" />;
};

export async function fetchDefaultValues<T extends FieldValues>(url: string): Promise<T> {
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
    }).then(async (response) => {
        if (response.status !== 200) {
            throw new ServerError('server error', response.status);
        }
        return await response.json().catch((error) => { 
            throw new ServerError('Bad response from server', 500, {cause: error});
        }) as T; 
    });
}

interface FormLoaderOptions {
    templateId?: string;
    retry?: boolean;
}

export const withFormLoader = <T extends FieldValues>(
    Form: React.ComponentType<{defaultValues: T} & any>, 
    dataUrl: string,
    options: FormLoaderOptions = {}
) => {
    const opts = {
        templateId: 'form-loading-indicator',
        retry: true,
        ... options
    };

    return function FormLoader(props: any) {
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState<Error | null>(null);
        const [formData, setFormData] = useState({});
        //
        const [requestDate, setRequestDate] = useState(Date.now());

        useEffect(() => {
            setError(null);
            setIsLoading(true);

            const data = fetchDefaultValues(dataUrl);
            data.then((response) => {
                setFormData(response);
            }).catch((error) => {
                setError(error);
            }).finally(() => setIsLoading(false));
        }, [requestDate]);

        const onRetry = () => {
            setRequestDate(Date.now());
        };

        if (isLoading) {
            return <FormLoadingIndicator templateId={opts?.templateId}/>;
        }

        if (error) {
            return (
                <div className="form-server-errors">
                    {error?.message}
                    {opts?.retry && <button type="button" onClick={onRetry}>Retry</button>}
                </div>
            );
        }

        return <Form {...props} {...formData}/>
    }
}
