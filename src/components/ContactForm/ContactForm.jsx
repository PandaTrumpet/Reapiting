import { Formik, Field, Form } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();
  const initial = {
    username: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initial} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field id={nameId} name="username" />
          </div>
          <div>
            <label htmlFor={numberId}>Nummber</label>
            <Field id={numberId} name="number" />
          </div>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
}
