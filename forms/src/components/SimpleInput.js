import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [enteredNameTouch, setEnterdNameTocuh] = useState(false);

  useEffect(() => {
    if (nameValid) {
      console.log("name input is valid");
    }
  }, [name]);

  const nameInputisInvalid = !nameValid && enteredNameTouch;
  const nameInputRef = useRef(); //alternate approach
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    setEnterdNameTocuh(true);
    if (name.trim() == "") {
      setNameValid(false);
      return;
    }
    setNameValid(true);
    console.log(name);
    const enteredVal = nameInputRef.current.value;
    console.log(`From ref ${enteredVal}`);
    setName("");
  };

  const nameInputClasses = nameInputisInvalid
    ? "form-control-invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={name}
        />
        {nameInputisInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
