import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    hasError: nameInputisInvalid,
    valueChangeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,
    isValid: enteredNameisValid,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    blurHandler: emailInputBlurHandler,
    isValid: enteredEmailisValid,
    reset: resetEmailInput
  } = useInput(validateEmail);
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // const [nameValid, setNameValid] = useState(false);
  const [formIsValid, setFormisValid] = useState(false);
  useEffect(() => {
    if (enteredNameisValid && enteredEmailisValid) {
      setFormisValid(true);
    } else {
      setFormisValid(false);
    }
  }, [enteredNameisValid, enteredEmailisValid]);


  const formSubmit = (event) => {
    event.preventDefault();

    if (!enteredNameisValid || !enteredNameisValid) {
      return;
    }
    console.log(`Name: ${name} \n Email: ${email}`);
    // const enteredVal = nameInputRef.current.value;
    // console.log(`From ref ${enteredVal}`);
    resetNameInput();
    resetEmailInput()
  };

  const nameInputClasses = nameInputisInvalid
    ? "form-control-invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control-invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={name}
        />
        {nameInputisInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            Email must not be empty or incorrect email entered
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
