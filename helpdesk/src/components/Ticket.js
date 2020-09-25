import React from "react";

const Ticket = ({ticket}) => {

  const {
    title,
    username,
    assigned,
    assigned_to,
  } = ticket;

  return (
    <section>
      <header>
        <h3>{title}</h3>
      </header>
      <div>
      <p>user:{username} - helper:{assigned_to}</p>
      </div>
    </section>
  );
};

export default Ticket;
