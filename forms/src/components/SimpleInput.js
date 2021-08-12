import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  
  const nameInputRef = useRef(); //alternate approach
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    if(name.trim() == ''){
      return;
    }
    console.log(name);
    const enteredVal = nameInputRef.current.value;
    console.log(`From ref ${enteredVal}`);
    setName("");
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={name}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
