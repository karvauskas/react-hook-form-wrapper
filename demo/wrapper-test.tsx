import { createRoot } from "react-dom/client";
import { FieldReactSelect, Form, spec } from "../src";
import z from "zod";
import { useFieldArray, useWatch } from "react-hook-form";
import { StrictMode, useMemo } from "react";
import { createForm, createSchema, FieldInput, Submit } from "../src";
import { DevTool } from '@hookform/devtools';

const schema = createSchema({
    firstname: spec.string(z.string().min(3), 'a'),
    //selector: spec.custom(z.array(z.any()).min(1)), 
    lastname: spec.string(z.string().min(3).max(6)),
    //price: spec.number(z.number()),
    items: spec.custom(z.array(
        z.object({price: z.coerce.number().min(2)})
    ).min(2), [])
    /*personal: {
        address: {
            //street: field.string(z.string().min(4).optional())
        }
    },*/
    // test: field.custom(z.date())
});

type FormInputTypes = z.input<typeof schema.schema>;
type FormOutputTypes = z.output<typeof schema.schema>;

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

const MyForm = () => {
    const {form, attach} = createForm(schema, {
        defaultValues: {firstname: 'abc', items: []}
    });

    const { fields, append } = useFieldArray({
        control: form.control,
        name: "items"
    });

    /*const dd = useWatch({name: 'firstname', control: form.control});
    console.log(dd);*/

    console.log('parent');

    return (
        <> <DevTool control={form.control} placement="top-right" />
        <Form form={form} action="/">
            {fields.map((field, index) => {
                return <FieldInput<FormOutputTypes> name={`items.${index}.price`} key={field.id} label="Prop"/>
            })}

           <button
                type="button"
                onClick={() => {
                    append({price: ''});
                }}
            >append</button>

            <div>------</div>

            <FieldInput<FormOutputTypes> name="lastname"/>

            <FieldInput name="fistname" label="Firstname"/>
            <FieldReactSelect {...attach<typeof FieldReactSelect>('selector', {
                id: 'a',
                label: 'Pasirinkimai',
                options: [{ label: 'a', value: 'a', item: 'aa' }] 
            })}/>

            {/*
            <FieldInput {...name('firstname')} label="firstname" />
            <FieldReactSelect {...name('selector')} label="Pasirinkimai" options={selectOptions} />
            */}

            <Submit label="Saugoti" autoHide={true}/>
        </Form>
        </>
    );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<StrictMode><MyForm/></StrictMode>);
