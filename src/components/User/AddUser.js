import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button"

import styles from './AddUser.module.css'

const AddUser = (props) => {
  // Initialize useState
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  // Adds User
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    if (+enteredAge < 1) {
      return
    }
    console.log(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  //Saves Name and Age from inputs
  const userNameChangeHandler = (event)=> {
    setEnteredUserName(event.target.value);
  }
  const ageChangeHandler = (event)=> {
    setEnteredAge(event.target.value);
  }
  
  return (
  <Card className={styles.input} >
    <form onSubmit = {addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={enteredUserName} onChange ={userNameChangeHandler}/>

      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
      
      <Button type= 'submit'>Add User</Button>
    </form>
  </Card>
  )
};

export default AddUser;