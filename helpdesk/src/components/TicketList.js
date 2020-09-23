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

 
  useEffect(e => {
    console.log(props.role);
    if (props.role === 'helper'){
      axiosWithAuth().get('/tickets')
      .then(res => {
        props.setTickets(res);
      })
      .catch(er => {
        console.log(er);
      });
    }
    else {
      axiosWithAuth().get(`/tickets/users/${props.user_id}`)
      .then(res => {
        props.setTickets(res);
      })
      .catch(er => {
        console.log(er);
      });
    }},[update]
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
      data: state.data,
      user_id: state.userid,
  }
}

const dtp = {setTickets, selectItem}

export default connect(stp,dtp)(TicketList);
