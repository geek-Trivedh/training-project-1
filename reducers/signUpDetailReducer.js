const initialState = {
  signUpDetails: {
    fullName: "",
    email: "",
    dob: "",
    number: "",
    password: "",
  },
};

const signUpDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SIGN_UP_DETAIL":
      return {
        ...state,
        signUpDetails: action.signUpDetails,
      };
    default: {
      return state;
    }
  }
};

export default signUpDetailReducer;
