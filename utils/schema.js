import * as yup from "yup";
import { REQ_FIELD, VALID_EMAIL } from "../constants/constants";
import phoneRegExp from "./regex";

export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(REQ_FIELD)
    .min(3, "Name is too short")
    .max(30, "Name is too long"),
  lastName: yup
    .string()
    .required(REQ_FIELD)
    .min(3, "Name is too short")
    .max(30, "Name is too long"),
  email: yup
    .string()
    .email(VALID_EMAIL)
    .required(REQ_FIELD)
    .min(3, "Email is too short")
    .max(30, "Email is too long"),
  fullName: yup.string().required(REQ_FIELD),
  number: yup
    .string()
    .required(REQ_FIELD)
    .matches(phoneRegExp, "Phone number is not valid")
    .max(13, "Number is too long"),
  dob: yup.string().required(REQ_FIELD),
  // gender: yup.boolean().required(REQ_FIELD),
  password: yup.string().min(3).max(15).required(REQ_FIELD),
  confirmPassword: yup
    .string()
    .required(REQ_FIELD)
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email(VALID_EMAIL).required(REQ_FIELD),
  password: yup.string().required(REQ_FIELD),
});
