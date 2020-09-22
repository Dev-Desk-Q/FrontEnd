import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import NavLogin from './navLogin';
import axios from 'axios';

const RegistrationForm = (props) => {
  const [regTrue, setRegTrue] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const onChange = (e) => {
    e.preventDefault();

    const targetValue = e.target.value;
    const targetName = e.target.name;

    setFormState({ ...formState, [targetName]: targetValue });
  };

    const { password, confirmPassword } = formState;

    // Password Validation
    if (password !== confirmPassword) {
      alert("Passwords must match!");
      return null;
    }
    

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
   props.regUser(formState);
  };
  
  if (regTrue === false) {return (
    <>
        <NavLogin info={props} />
        <Form onSubmit={onSubmit}>
          <h2>Registeration Form</h2>

          <FormGroup className="form-group">
            <Label htmlFor="username">Username</Label>
            <br />
            <Input onChange={onChange} name="username" type="text" required />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="password">Password</Label>
            <br />
            <Input
              onChange={onChange}
              name="password"
              type="password"
              required
              minLength="6"
            />
            <br />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <br />
            <Input
              onChange={onChange}
              name="confirmPassword"
              type="password"
              minLength="6"
              required
            />
            <br />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="role">Role</Label>
            <br />
            <Input type="select" onChange={onChange} name="role" required>
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
  );}

  else {
    return (
      <>
      <NavLogin info={props}/>
      <div>
        <h3> Please login</h3>
      </div>
      </>
    );
  }
};

const stp = (state) => {
  return {
    newUser: state.registered,
  };
};

const dtp = { };

export default connect(stp, dtp)(RegistrationForm);
