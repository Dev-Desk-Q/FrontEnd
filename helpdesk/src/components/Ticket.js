import React from "react";

const Ticket = ({
  title,
  description,
  category,
  completed,
  assigned,
  assignedUser,
}) => {
  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        <p>{description}</p>
      </main>
      <footer>
        <p>Completed: {completed}</p>
        <p>Assigned: {assigned}</p>
        <p>Assigned To: {assignedUser}</p>
        <span>{category}</span>
      </footer>
    </article>
  );
};

export default Ticket;
