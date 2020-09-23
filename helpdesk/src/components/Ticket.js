import React from "react";

const Ticket = ({ticket}) => {

  const {
    title,
    description,
    category,
    completed,
    assigned,
    assigned_to,
  } = ticket;

  return (
    <section>
      <header>
        <h3>{title}</h3>
      </header>
      <div>
      <p>user:{assigned} - helper:{assigned_to}</p>
      </div>
    </section>
  );
};

export default Ticket;
