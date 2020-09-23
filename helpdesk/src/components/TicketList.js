import NavLogin from "./navLogin";
import Ticket from "../components/Ticket";
import React, { useEffect, useState } from "react";
import {axiosWithAuth} from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {setTickets, selectItem} from '../redux/hdAction';
import './ticketlist.css'
import ActiveTicket from './selectedTicket';


const TicketList = (props) => {
  const [update, setUpdate] = useState(false);
  const testres = {
    data: [
    { 
      id: 1,
      title: "Title 1 from student",
      description: "Testing Description 1",
      category: "Testing Category",
      completed: false,
      assigned: "Testing Student",
      assigned_to: "Testing Helper",
    },
    {
      id: 2,
      title: "Title 2 from student",
      description: "Testing Description 2",
      category: "Testing Category 2",
      completed: true,
      assigned: "Testing Student",
      assigned_to: "Testing Helper",
    },
    {
      id: 3,
      title: "Title 3 from student",
      description: "Testing Description 3",
      category: "Testing Category 3",
      completed: false,
      assigned: "Testing Student",
      assigned_to: "Testing Helper",
    },
  ]}

 
  useEffect(e => {
    console.log(props.role);
    if (props.role === 'helper'){
      axiosWithAuth().get('/tickets')
      .then(res => {
        props.setTickets(res);
        console.log(res);
      })
      .catch(er => {
        console.log(er);
      });
    }
    else {
      props.setTickets(testres);}
    },[update]
  );


  return (
    <>
    <NavLogin info={props} />
      <div className='ticket-cont'>
        <div className='tickets'>
          {props.data.map((ticket, index) => (
            <div className='tick' onClick={e => {props.selectItem(ticket)}}>
              <Ticket ticket={ticket} key={ticket.id} />
            </div>
          ))}
        </div>
        <div className='selectedTicket'>
            <ActiveTicket selected={props.selected} role={props.role} update={update} setUpdate={setUpdate}/>
        </div>
      </div>
    </>
  );
};

const stp = state => {
  return {
      selected: state.selected,
      role: state.role,
      data: state.data
  }
}

const dtp = {setTickets, selectItem}

export default connect(stp,dtp)(TicketList);
