import React, { useState } from "react";
import NavLogin from './navLogin';
import { connect } from 'react-redux';
import { Form, Input, Label, FormGroup } from "reactstrap";
import { axiosWithAuth } from '../utils/axiosAuth';

const TicketCreationForm = (props) => {
  const [formState, setFormState] = useState({
    assigned: 0,
    assigned_to: null,
    category: "",
    completed: 0,
    description: " ",
    id: 0,
    title: "",
    tried: "",
    user_id: props.user_id
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/tickets', {...formState, id: Date.now()})
    .then(res => {
      alert('ticket submited');
    })
    .catch(er => {
      console.log(er);
    })
  };

  const onChange = (e) => {
    e.preventDefault();

    const targetName = e.target.name;
    const targetValue = e.target.value;

    setFormState({
      ...formState,
      [targetName]: targetValue,
    });
  };

  return (
    <>
      <NavLogin props={props} />
      <Form onSubmit={onSubmit}>
        <h3>Ticket Creation</h3>
        <FormGroup className="form-group">
          <Label htmlFor="title">Title</Label>
          <br />
          <Input onChange={onChange} name="title" type="text" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label htmlFor="description">Description</Label>
          <br />
          <Input
            rows="4"
            cols="50"
            type="textarea"
            onChange={onChange}
            name="description"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="tried">What has been tried</Label>
          <br />
          <Input
            onChange={onChange}
            rows="4"
            cols="50"
            type="textarea"
            name="tried"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <br />
          <Input onChange={onChange} type="select" name="category">
            <option value="Network">Network</option>
            <option value="Account">Account</option>
            <option value="Misc">Mic</option>
          </Input>
        </FormGroup>
        <Input type="submit" value="Post Ticket" />
      </Form>
    </>
  );
};

const stp = state => {
  return {
      user_id: state.userid
  }
}

const dtp = { }

export default connect(stp,dtp)(TicketCreationForm);
