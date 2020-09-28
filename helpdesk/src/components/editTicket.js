import React, { useEffect, useState } from "react";
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
            props.setEditTrue(!props.editTrue);
        })
        .catch(er => {
            console.log(er);
        });
  };

  useEffect(e => {
      setFormState(props.selected)
  },[props.editTrue]);

  const onChange = (e) => {
    e.preventDefault();

    const targetName = e.target.name;
    const targetValue = e.target.value;

    setFormState({
      ...formState,
      [targetName]: targetValue,
    });
  };

  if (props.editTrue === false) {return (<></>)}
 else {
  return (
    <>
      <Form onSubmit={onSubmit} className='edit'>
        <h3>Ticket Creation <button onClick={()=>{props.setEditTrue(!props.editTrue)}}>X</button></h3>
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
            <option value="Network">Network</option>
            <option value="Account">Account</option>
            <option value="Misc">Misc</option>
          </Input>
        </FormGroup>
        <Input type="submit" value="Post Changes" />
      </Form>
    </>
  );}
};

const stp = state => {
  return {
    selected: state.selected
  }
}

const dtp = { }

export default connect(stp,dtp)(EditTicketForm);
