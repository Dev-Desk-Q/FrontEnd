import NavLogin from "./navLogin";
import Ticket from "../components/Ticket";
import React, { useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {setTickets} from '../redux/hdAction';


const TicketList = (props) => {
  const dummyData = [
    {
      title: "Testing Title 1",
      description: "Testing Description 1",
      category: "Testing Category",
      completed: false,
      assigned: "Testing Student",
      assignedUser: "Testing Helper",
    },
    {
      title: "Testing Title 2",
      description: "Testing Description 2",
      category: "Testing Category 2",
      completed: true,
      assigned: "Testing Student",
      assignedUser: "Testing Helper",
    },
    {
      title: "Testing Title 3",
      description: "Testing Description 3",
      category: "Testing Category 3",
      completed: false,
      assigned: "Testing Student",
      assignedUser: "Testing Helper",
    },
  ];

  useEffect(e => {
    axiosWithAuth().get('/tickets')
    .then(res => {
      props.setTickets(res);
      console.log(res);
    })
    .catch(er => {
      console.log(er);
    });
  });

  return (
    <>
      <NavLogin info={props} />
      {dummyData.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} />
      ))}
    </>
  );
};

const stp = state => {
  return {
      message: state.message,
      login: state.login
  }
}

const dtp = {setTickets}

export default connect(stp,dtp)(TicketList);
