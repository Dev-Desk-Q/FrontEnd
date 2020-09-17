import React from "react";

const Ticket = () => {
  const dummyData = {
    title: "Testing Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi officia eos nobis recusandae earum praesentium odit nemo explicabo autem!",
  };
  return (
    <article>
      <header>
        <h2>{dummyData.title}</h2>
      </header>
      <main>
        <p>{dummyData.description}</p>
      </main>
    </article>
  );
};

export default Ticket;
