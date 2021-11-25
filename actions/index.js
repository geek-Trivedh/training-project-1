import { SIGN_UP_INFO } from "./actionTypes";

export const saveSignUpDetailsAction = (signUpDetails) => ({
  type: SIGN_UP_INFO,
  signUpDetails,
});
