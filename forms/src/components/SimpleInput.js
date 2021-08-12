import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const nameInputRef = useRef(); //alternate approach
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
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

  
  const nameInputClasses = nameValid ? "form-control" : "form-control-invalid";
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
        {!nameValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
