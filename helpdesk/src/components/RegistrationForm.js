import React, { useState } from "react";
import NavLogin from './navLogin';
import { connect } from 'react-redux';
import axios from 'axios';

const RegistrationForm = (props) => {
  const [regTrue, setRegTrue] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    role: "",
  });

  const onChange = (e) => {
    e.preventDefault();

    const targetValue = e.target.value;
    const targetName = e.target.name;

    setFormState({ ...formState, [targetName]: targetValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('https://areallyuniquename.herokuapp.com/api/users/register', formState)
   .then(res => {
    console.log('worked');
    setRegTrue(!regTrue);
   })
   .catch(er => {
    console.log('did not work');
       console.log(er);
   });
  };
  
  if (regTrue === false) {return (
    <>
      <NavLogin info={props}/>
      <form onSubmit={onSubmit}>
        <h2>Registeration Form</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input onChange={onChange} name="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input onChange={onChange} name="password" type="password" />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <br />
          <select onChange={onChange} name="role">
            <option disabled={formState.role === "" ? false : true} value="">
              -- Select a Role --
            </option>
            <option value="student">Student</option>
            <option value="helper">Helper</option>
          </select>
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );}

  else {
    return (
      <>
      <NavLogin info={props}/>
      <div>
        <h3> Please login </h3>
      </div>
      </>
    );
  }
};

const stp = state => {
  return {
      newUser: state.registered,
  }
}

const dtp = { }

export default connect(stp,dtp)(RegistrationForm);
