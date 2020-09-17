import React from "react";

const TicketList = () => {
  const dummyData = [
    { title: "Testing Title 1", description: "testing description 1" },
    { title: "Testing Title 2", description: "testing description 2" },
    { title: "Testing Title 3", description: "testing description 3" },
    { title: "Testing Title 4", description: "testing description 4" },
  ];
  return (
    <>
      {dummyData.map(({ title, description }, index) => (
        <article key={index}>
          <header>
            <h2>{title}</h2>
          </header>
          <main>
            <p>{description}</p>
          </main>
        </article>
      ))}
    </>
  );
};

export default TicketList;
