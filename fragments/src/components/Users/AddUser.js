import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setUsername] = useState("");
  const [error, setError] = useState();
  const [age, setAge] = useState("");

  const adduserHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Enter an age > 0",
      });
    }
    props.giveMeUsers({ name: enteredUsername, age });
  };
  const userNameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleErr={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="kams69"
            value={enteredUsername}
            onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="25"
            value={age}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
