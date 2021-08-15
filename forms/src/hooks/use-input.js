import { useState } from "react";


const useInput = (validateValue)=>{
    const [enteredValue, setEnteredValue] = useState("");
    const [touched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue) ;
    const hasError = !valueIsValid && touched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };
      const blurHandler = (event) => {
        setIsTouched(true);
      };
    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        blurHandler
    }
}
export default useInput;