import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  // const [nameValid, setNameValid] = useState(false);
  const [enteredNameTouch, setEnterdNameTocuh] = useState(false);
  const enteredNameisValid = name.trim() !== "";
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouch;

  // useEffect(() => {
  //   if (nameValid) {
  //     console.log("name input is valid");
  //   }
  // }, [nameValid]);

  const nameInputRef = useRef(); //alternate approach
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnterdNameTocuh(true);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    setEnterdNameTocuh(true);
    if (!enteredNameisValid) {
      return;
    }
    // const enteredVal = nameInputRef.current.value;
    // console.log(`From ref ${enteredVal}`);
    setName("");
    setEnterdNameTocuh(false);
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
          onBlur={nameInputBlurHandler}
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
