import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = () => {
   const [enteredUsername, setUsername] = useState('') 
   const [age, setAge] = useState('') 

  const adduserHandler = (e) => {
    e.preventDefault();
    alert(`Entered value is ${enteredUsername} ${age}`)
  };
  const userNameChangeHandler = (e)=>{
      setUsername(e.target.value);
  }
  const ageChangeHandler = (e)=>{
      setAge(e.target.value);
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={adduserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="kams69" value={enteredUsername} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="25" value={age} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
