import React from "react";
import NavLogin from "./navLogin";
import Ticket from "../components/Ticket";

const TicketList = (props) => {
  const dummyData = [
    {
      title: "Testing Title 1",
      description: "Testing Description 1",
      category: "Testing Category",
      completed: false,
      asssigned: "Testing Student",
      assignedUser: "Testing Helper",
    },
    {
      title: "Testing Title 2",
      description: "Testing Description 2",
      category: "Testing Category 2",
      completed: true,
      asssigned: "Testing Student",
      assignedUser: "Testing Helper",
    },
    {
      title: "Testing Title 3",
      description: "Testing Description 3",
      category: "Testing Category 3",
      completed: false,
      asssigned: "Testing Student",
      assignedUser: "Testing Helper",
    },
  ];
  return (
    <>
      <NavLogin info={props} />
      {dummyData.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} />
      ))}
    </>
  );
};

export default TicketList;
