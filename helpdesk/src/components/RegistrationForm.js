import React, { useState } from "react";

const RegistrationForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
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
      <form onSubmit={onSubmit}>
        <h2>Registeration Form</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input onChange={onChange} name="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input onChange={onChange} name="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input onChange={onChange} name="password" type="password" />
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegistrationForm;
