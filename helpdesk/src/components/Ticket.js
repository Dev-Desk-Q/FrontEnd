import React from "react";

const Ticket = ({ticket}) => {

  const {
    title,
    description,
    category,
    completed,
    assigned,
    assignedUser,
  } = ticket;

  return (
    <article>
      <header>
        <h3>{title}</h3>
      </header>
      <main>
        <p>{description}</p>
      </main>
      <footer>
        <p>Completed: {`${completed}`}</p>
        <p>Assigned: {assigned}</p>
        <p>Assigned To: {assignedUser}</p>
        <span><strong>Category</strong>: {category}</span>
      </footer>
    </article>
  );
};

export default Ticket;
