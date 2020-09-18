import React, { useState } from "react";

import { Form, Input, Label, FormGroup } from 'reactstrap'
import NavLogin from "./navLogin";

const TicketCreationForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
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
          <Input type="textarea" onChange={onChange} name="description"></Input>
        </FormGroup>
        <Input type="submit" value="Post Ticket" />
      </Form>
    </>
  );
};

export default TicketCreationForm;
