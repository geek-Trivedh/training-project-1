import { Toast } from "react-native-toast-message/lib/src/Toast";

export const showToast = (msgType, msgText1, msgText2) => {
  Toast.show({
    type: msgType,
    text1: msgText1,
    text2: msgText2,
  });
};
