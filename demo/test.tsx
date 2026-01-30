import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Form, createZodForm, fetchDefaultValues, withFormLoader } from "react-hook-form-wrapper";
import { FieldInput, FieldNativeSelect, FieldReactSelect, FieldDatepicker, Submit, FieldTextarea } from "react-hook-form-wrapper/fields";
import z from "zod";

const selectOptionSchema = z.looseObject({
    value: z.any(),
});

export const reactSelectMultiSchema = z
    .array(
        z.union([
            z.string(),
            selectOptionSchema,
        ])
    ).min(1)
    .superRefine((values, ctx) => {
        for (const v of values) {
            if (typeof v === 'string') continue;

            if (typeof v.value !== 'string') {
                ctx.addIssue({
                    code: "custom",
                    message: 'Invalid select value',
                    path: [], // 🔥 error ant viso field
                });
                return;
            }
        }
    })
    .transform(values =>
        values.map(v => typeof v === 'string' ? v : v.value)
    );

const schema = z.object({
    firstname: z.string().min(4),
    lastname: z.coerce.number().min(2),
    personal: z.object({
        address: z.object({
            street: z.string().min(2)
        })
    }),
    /*selector: z.array(
        z.object({value: z.string()}).transform(v => v?.value || '').or(z.string()) 
    ).min(1)*/
    selector: reactSelectMultiSchema
    //selector: z.object({value: z.string()}, 'required').transform(v => v?.value).or(z.string())
});

const selectOptions = [
    { label: 'a', value: 'a', item: 'aa' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 2.5 },
    {
        label: 'group', options: [
            { label: 'gc', value: 'gc' }
        ]
    }
];

const TestApp = ({ defaultValues }) => {
    const form = createZodForm(schema, {
        defaultValues
        //defaultValues: () => fetchDefaultValues('api/test')
    });

    return (
        <Form form={form} action="/">
            <FieldInput name="firstname" label="a" />
            <FieldInput name="lastname" label="aa" type="number" />

            <FieldInput name="personal.address.street" label="bb" />

            <FieldReactSelect name="selector" label="aaa" options={selectOptions} isClearable isMulti />

            <FieldDatepicker name="datepicker" />

            <FieldTextarea name="long-text" label="long-text" />

            <Submit label="Submit" />
        </Form>
    );
}

const root = createRoot(document.getElementById("root-test") as HTMLElement);
const TestForm = withFormLoader(TestApp, '/api/test');
root.render(<TestForm />);
