import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userSchema = yup.object().shape({
  Name: yup
    .string()
    .matches(/^[A-Za-z ]*$/)
    .min(3)
    .max(15)
    .required(),
  Surname: yup
    .string()
    .matches(/^[A-Za-z ]*$/)
    .min(3)
    .max(15)
    .required(),
  Birthdate: yup.string().length(10).required(),
  Email: yup.string().email().max(25).required(),
  Password: yup.string().min(5).max(15).required(),
  Telno: yup.string().length(10).required(),
});
