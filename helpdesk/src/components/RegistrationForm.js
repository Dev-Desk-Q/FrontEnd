import React, { useState } from "react";
import NavLogin from './navLogin';

const RegistrationForm = (props) => {
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

    console.log(formState);
  };

  return (
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
  );
};

export default RegistrationForm;
