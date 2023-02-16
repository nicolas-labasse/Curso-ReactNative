import * as Yup from 'yup';

export function intialValues() {
  return {
    email: '',
    password: '',
  };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
        .email('no es un email valido')
        .required('el campo es obligatorio'),
        password: Yup.string().required('el campo es obligatorio'),
    });
}