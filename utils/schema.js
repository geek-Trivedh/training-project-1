import * as yup from "yup";
import phoneRegExp from "./regex";

export default schema = yup.object().shape({
  firstName: yup
    .string()
    .required("This is a required field")
    .min(3, "Name is too short")
    .max(30, "Name is too long"),
  lastName: yup
    .string()
    .required("This is a required field")
    .min(3, "Name is too short")
    .max(30, "Name is too long"),
  email: yup
    .string()
    .email("Enter a vaild email")
    .required("This is a required field")
    .min(3, "Email is too short")
    .max(30, "Email is too long"),
  // fullName: yup.string().required("This is a required field"),
  number: yup
    .string()
    .required("This is a required field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(13, "Number is too long"),
  dob: yup.string().required("This is a required field"),
  // gender: yup.boolean().required("This is a required field"),
  password: yup.string().min(3).max(15).required("This is a required field"),
  confirmPassword: yup
    .string()
    .required("This is a required field")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
