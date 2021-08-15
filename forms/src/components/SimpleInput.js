import {  useState, useEffect } from "react";

const SimpleInput = (props) => {
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [nameValid, setNameValid] = useState(false);
  const [formIsValid, setFormisValid] = useState(false);
  const [enteredNameTouch, setEnterdNameTocuh] = useState(false);
  const [enteredEmailTouch, setEnterdEmailTocuh] = useState(false);
  const enteredNameisValid = name.trim() !== "";
  const enteredEmailisValid = validateEmail(email);
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouch;
  const emailInputIsInvalid = !enteredEmailisValid && enteredEmailTouch;
  useEffect(() => {
    if (enteredNameisValid && enteredEmailisValid) {
      setFormisValid(true);
    } else {
      setFormisValid(false);
    }
  }, [enteredNameisValid, enteredEmailisValid]);

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnterdNameTocuh(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnterdEmailTocuh(true);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    setEnterdNameTocuh(true);
    setEnterdEmailTocuh(true);

    if (!enteredNameisValid || !enteredNameisValid) {
      return;
    }
    console.log(`Name: ${name} \n Email: ${email}`)
    // const enteredVal = nameInputRef.current.value;
    // console.log(`From ref ${enteredVal}`);
    setName("");
    setEmail("");
    setEnterdNameTocuh(false);
    setEnterdEmailTocuh(false);
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
