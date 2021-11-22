export const saveSignUpDetails = (signUpDetails) => ({
  type: "SAVE_SIGN_UP_DETAIL",
  signUpDetails: {
    fullName: signUpDetails.fullName,
    email: signUpDetails.email,
    password: signUpDetails.password,
    number: signUpDetails.number,
    dob: signUpDetails.dob,
  },
});
