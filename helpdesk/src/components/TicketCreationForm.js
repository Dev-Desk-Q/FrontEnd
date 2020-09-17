import React, { useState } from "react";

const TicketCreationForm = () => {
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
      <form onSubmit={onSubmit}>
        <h2>Ticket Creation</h2>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <br />
          <input onChange={onChange} name="title" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <br />
          <textarea onChange={onChange} name="description"></textarea>
        </div>

        <input type="submit" value="Post Ticket" />
      </form>
    </>
  );
};

export default TicketCreationForm;
