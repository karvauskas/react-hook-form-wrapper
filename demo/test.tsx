import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Form, createForm, createSchema, fetchDefaultValues, field } from "../lab";
import { FieldInput, FieldNativeSelect, FieldReactSelect, FieldDatepicker, Submit, FieldTextarea } from "../lab";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string
  exampleRequired: string
}


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input {...bind("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

const Field = (props) => {
    return <input {...register("exampleRequired", { required: true })} />
};


const root = createRoot(document.getElementById("root-test") as HTMLElement);
//const TestForm = withFormLoader(TestApp, '/api/test');
root.render(<App />);
