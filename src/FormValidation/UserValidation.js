import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/)
    .min(3)
    .max(15)
    .required(),
  surname: yup
    .string()
    .matches(/^[A-Za-z ]*$/)
    .min(3)
    .max(15)
    .required(),
  birthDate: yup.string().length(10).required(),
  email: yup.string().email().max(25).required(),
  password: yup.string().min(5).max(15).required(),
  telno: yup.string().length(10).required(),
});
