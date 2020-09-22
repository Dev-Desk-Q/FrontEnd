import React, { useState } from "react";
import NavLogin from './navLogin';
import { connect } from 'react-redux';
import { Form, Input, Label, FormGroup } from "reactstrap";

const TicketCreationForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    tried: "",
    category: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
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
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </Input>
        </FormGroup>
        <Input type="submit" value="Post Ticket" />
      </Form>
    </>
  );
};

const stp = state => {
  return {
      username: state.username
  }
}

const dtp = { }

export default connect(stp,dtp)(TicketCreationForm);
