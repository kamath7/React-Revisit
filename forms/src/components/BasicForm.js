import useInput from "../hooks/use-input";

const nameCheck = (value) => value.trim !== "";
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHanlder: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(nameCheck);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHanlder: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(nameCheck);
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHanlder: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
