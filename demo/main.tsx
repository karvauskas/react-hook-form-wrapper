import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Form, Submit } from "react-hook-form-wrapper";
import { TextField, HiddenField, NativeSelectField, ReactSelectField, DatepickerField, TextareaField } from "react-hook-form-wrapper/fields";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    username: z.email(),
    "other-field": z.coerce.number().min(18),
    datepicker: z.coerce.date(),
});

const App = () => {
    const form = useForm({
        defaultValues: { username: 'abc', datepicker: '2021-01-01' },
        resolver: zodResolver(schema)
    });

    return (
        <Form form={form} action="/">
            <TextField type="text" id="abc" name="username" label="username" required fieldControl={{fieldClassName: 'aa', fieldControlInvalidClassName: 'bb'}}/>
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

            <ReactSelectField name="react-selectas" label="React select" isMulti={true} options={[]} />

            <TextareaField name="textas" label="aaa" />
            <HiddenField name="ss" />

            <TextField name="person.firstname.other" label="person.firstname" />
            <TextField name="person.lastname" label="person.lastname" />

            <DatepickerField name="datepicker" label="Datepicker" />

            <Submit label="Saugoti" />
        </Form>
    );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<StrictMode><App /></StrictMode>);
