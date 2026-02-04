import { createRoot } from "react-dom/client";
import { createForm, createSchema, field, FieldInput } from "../src";
import { Form } from "../src";
import z from "zod";

const schema = createSchema({
    firstname: field.string(z.string().min(3), 'a'),
    lastname: field.string(z.string().min(3).max(6)),
    price: field.number(z.number()),
    personal: {
        address: {
            street: field.string(z.string().min(4).optional())
        }
    }
});

type FormInputTypes = z.input<typeof schema.schema>;
type FormOutputTypes = z.output<typeof schema.schema>;

const MyForm = () => {
    const {form, name} = createForm(schema);

    return (
        <Form form={form} action="/">
            <FieldInput {...name('firstname')} label="aa" placeholder="12"/>
        </Form>
    );
};

const root = createRoot(document.getElementById("root-test") as HTMLElement);
root.render(<MyForm/>);
