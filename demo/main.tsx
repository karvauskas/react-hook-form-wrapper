import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Form, Submit } from "react-hook-form-wrapper";
import { TextField, HiddenField, NativeSelectField, ReactSelectField } from "react-hook-form-wrapper/fields";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    username: z.email(),
    "other-field": z.coerce.number().min(18),
    textas: z.iso.date(),
});

const App = () => {
    const form = useForm({
        defaultValues: { username: 'abc' },
        resolver: zodResolver(schema)
    });

    return (
        <Form form={form} action="/">
            <TextField type="text" id="abc" name="username" label="username" />
            <div className="element">
                <div>
                    <div>
                        <TextField type="number" name="other-field" label="other field" />
                    </div>
                </div>
            </div>

            <NativeSelectField name="select-field" label="select field">
                <option value="a">aa</option>
            </NativeSelectField>

            <ReactSelectField name="react-selectas" label="React select" isMulti={true} options={[]}/>

            <TextField name="textas" label="" />
            <HiddenField name="ss" />

            <TextField name="person.firstname.other" label="person.firstname" />
            <TextField name="person.lastname" label="person.lastname" />

            <Submit label="Saugoti" />
        </Form>
    );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<StrictMode><App /></StrictMode>);
