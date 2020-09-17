import React from "react";

const RegistrationForm = () => {
  return (
    <>
      <form action="">
        <h2>Registeration Form</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input name="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input name="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input name="password" type="password" />
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
