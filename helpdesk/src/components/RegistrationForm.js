import React, { useState } from "react";
import NavLogin from './navLogin';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


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
      <Form onSubmit={onSubmit}>
        <h2>Registeration Form</h2>

        <FormGroup className="form-group">
          <Label htmlFor="username">Username</Label>
          <br />
          <Input onChange={onChange} name="username" type="text" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="password">Password</Label>
          <br />
          <Input onChange={onChange} name="password" type="password" />
          <br/>
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="role">Role</Label>
          <br />
          <Input type="select" onChange={onChange} name="role">
            <option disabled={formState.role === "" ? false : true} value="">
              -- Select a Role --
            </option>
            <option value="student">Student</option>
            <option value="helper">Helper</option>
          </Input>
        </FormGroup>
        <Input type="submit" value="Register" />
      </Form>
    </>
  );
};

export default RegistrationForm;
