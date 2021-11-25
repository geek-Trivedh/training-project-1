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
    case "SIGN_UP_INFO":
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
