import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        value: action.payload,
        isTouched: state.isTouched,
      };
    case "INPUT_BLUR":
      return {
        isTouched: true,
        value: state.value,
      };

    case "RESET":
      return {
        isTouched: false,
        value: "",
      };
    default:
      return {
        value: "",
        isTouched: false,
      };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT_CHANGE", payload: event.target.value });
  };
  const blurHandler = () => {
    dispatch({ type: "INPUT_BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    hasError,
    reset,
    valueChangeHandler,
    blurHandler,
    isValid: valueIsValid,
  };
};
export default useInput;
