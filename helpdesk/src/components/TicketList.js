import React, { useEffect } from "react";
import NavLogin from './navLogin';
import {axiosWithAuth} from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {setTickets} from '../redux/hdAction';

const TicketList = (props) => {
  const dummyData = [
    { title: "Testing Title 1", description: "testing description 1" },
    { title: "Testing Title 2", description: "testing description 2" },
    { title: "Testing Title 3", description: "testing description 3" },
    { title: "Testing Title 4", description: "testing description 4" },
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
      <NavLogin info={props}/>
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

const stp = state => {
  return {
      message: state.message,
      login: state.login
  }
}

const dtp = {setTickets}

export default connect(stp,dtp)(TicketList);
