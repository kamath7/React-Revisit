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
      const reset  = ()=>{
          setEnteredValue('')
          setIsTouched(false)
      }
    return {
        value: enteredValue,
        hasError,
        reset,
        valueChangeHandler,
        blurHandler,
        isValid: valueIsValid
    }
}
export default useInput;