import React, { useState } from "react";
import NavLogin from './navLogin';
import { connect } from 'react-redux';
import { Form, Input, Label, FormGroup } from "reactstrap";
import { axiosWithAuth } from '../utils/axiosAuth';

const EditTicketForm = (props) => {
  const [formState, setFormState] = useState(props.selected);

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().put(`/tickets/${props.selected.id}`, {...formState})
        .then(() => {
            props.setUpdate(!props.update);
        })
        .catch(er => {
            console.log(er);
        });
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
      <Form onSubmit={onSubmit}>
        <h3>Ticket Creation <button onClick={()=>{props.setEditing()}}>X</button></h3>
        <FormGroup className="form-group">
          <Label htmlFor="title">Title</Label>
          <br />
          <Input onChange={onChange} name="title" type="text" value={formState.title} />
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
            value={formState.description}
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
            value={formState.tried}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <br />
          <Input onChange={onChange} type="select" name="category" value={formState.category}>
            <option value="Network">option1</option>
            <option value="Account">option2</option>
            <option value="Misc">option3</option>
          </Input>
        </FormGroup>
        <Input type="submit" value="Post Ticket" />
      </Form>
    </>
  );
};

const stp = state => {
  return {
      
  }
}

const dtp = { }

export default connect(stp,dtp)(EditTicketForm);
