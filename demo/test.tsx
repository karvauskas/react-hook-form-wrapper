import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Form, createForm, createSchema, fetchDefaultValues, field } from "../src";
import { FieldInput, FieldNativeSelect, FieldReactSelect, FieldDatepicker, Submit, FieldTextarea } from "../src";
import z from "zod";

import "../src/styles/styles.css";                            

/*const selectOptionSchema = z.looseObject({
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
    ).default([]);*/


const schema = createSchema({
    firstname: field.string( z.string().trim().min(3), 'a' ),
    lastname: field.string(z.string().trim().min(2).optional()),
    price: field.number(z.number().optional()),
    personal: {
        address: {
            street: field.string(z.string(), 'abc')
        }
    }
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

const TestApp = ({ defaultValues = {} }) => {
    const form = createForm(schema, {
        defaultValues: {
            firstname: 'a a'
        },
        //defaultValues
        //defaultValues: () => fetchDefaultValues('api/test')
    });

    return (
        <Form form={form} action="/">
            <div className="form-inline-group">
                <FieldInput name="firstname" label="Firstname" required/>
                <FieldInput name="lastname" label="Lastname" />
            </div>

            <FieldInput name="price" label="Kaina" />

            <FieldInput name="personal.address.street" label="Adresas (gatve)" />

            {/*<FieldNativeSelect name="pasirinkimai" label="Pasirinkimai">
                <option value="">Pirmas</option>
                <option value="2">Antras</option>
            </FieldNativeSelect>

            <FieldReactSelect name="selector" options={selectOptions} label="aaa" isMulti />

            <FieldDatepicker name="datepicker" label="date picker" autoComplete="off"/>

            <FieldTextarea name="longtext" label="long-text" />

            <div className="form-control required">
                <label htmlFor="_r_0_1">Firstname</label>
                <div className="with-addons">
                    <div className="field-addon">item</div>
                    <div className="field-addon">item</div>
                    <input required id="_r_0_1" type="text" name="firstname"/>
                    <div className="field-addon">item kitas</div>
                    <div className="field-addon">item 2</div>
                </div>
            </div>*/}

            <Submit label="Submit" />
        </Form>
    );
}

const root = createRoot(document.getElementById("root-test") as HTMLElement);
//const TestForm = withFormLoader(TestApp, '/api/test');
root.render(<TestApp />);
