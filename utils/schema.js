import * as yup from "yup";

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
  // fullName: yup.string().required("This is a required field"),
  // number: yup.number().positive().required("This is a required field"),
  // dob: yup.date().required("This is a required field"),
  // gender: yup.boolean().required("This is a required field"),
  // password: yup.string().min(3).max(15).required("This is a required field"),
  // confirmPassword: yup
  //   .string()
  //   .min(3)
  //   .max(15)
  //   .required("This is a required field"),
});
