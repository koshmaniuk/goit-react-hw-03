import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactFrom.module.css';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    onAdd({ id: nanoid(), ...values });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactsSchema}>
      <Form className={css.container}>
        <div className={css.input}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.input}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
