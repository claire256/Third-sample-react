import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const [user, setUser] = useState({
    username: "",
    age: "",
  });
  const updateInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName =nameInputRef.current.value
    const enteredAge =ageInputRef.current.value 
    if (user.enteredName.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age",
      });
      return;
    }
    if (+user.enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age",
      });
      return;
    }
    props.onAddUser(user);
    setUser({ username: "", age: "" });
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onComfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={updateInput}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            name="age"
            type="number"
            value={user.age}
            onChange={updateInput}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
