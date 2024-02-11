import { Formik, Form, Field } from 'formik';

export const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="username" />
        <Field type="text" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
