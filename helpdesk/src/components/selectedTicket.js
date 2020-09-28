import React, {useEffect, useState} from 'react';
import './ticketlist.css';
import {connect} from 'react-redux'
import { axiosWithAuth } from '../utils/axiosAuth';
import EditTicketForm from './editTicket'

const ActiveTicket = (props) => {
    const [updateThis, setUpdateThis] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const {title, assigned_to, description, category, username, completed, tried, id} = props.selected;
    const classname = `type${completed}`;
    const [editTrue, setEditTrue] = useState(false);

    
    useEffect(e => 
        
        {if (props.role === 'helper'){
            setIsDisabled(false);
        }

    },[]);

    const claimIt = {assigned: true};
    const completeIt = {completed: 1};
    

    const makeChange = (x) => {
        axiosWithAuth().put(`/tickets/${id}`, x )
        .then(() => {
            props.setUpdate(!props.update);
           setUpdateThis(!updateThis);
        })
        .catch(er => {
            console.log(er);
        });
    }

    const deleteTicket = () => {
        axiosWithAuth().delete(`/tickets/${id}`)
        .then(() => {
            console.log('worked');
            props.setUpdate(!props.update);
        })
        .catch(er => {
            console.log(er);
        });
    }

    if (title === null ){
        return(<div className='highlight'>Please select a ticket</div>)
    }
    else {
    return(
        <div className='selectBox'>
            <div>
                <header className='selectTop'>
                    <button disabled={isDisabled} onClick={e => {makeChange(claimIt)}}>Claim</button>
                    <button onClick={() => {setEditTrue(!editTrue)}}>edit</button>
                    <h2 className='highlight'>{title}</h2>
                    <p>User: {username}</p>
                </header>
                <h3>Category:</h3> <span>{category}</span>
                <p> {assigned_to}</p>
            </div>
            <div className='selectDesc'>
                <h3>Description:</h3>
                <p>{description}</p>
            </div>
            <h3>Whats been tried:</h3>
            <p className='selectTried'>{tried}</p>
            <div className={classname}>
                <button onClick={e => {makeChange(completeIt)}}>Complete Ticket</button>
                <p>status</p>
                <button disabled={isDisabled} onClick={e => {deleteTicket()}}>delete</button>
            </div>
            <section > 
                <EditTicketForm update={props.update} setUpdate={props.setUpdate} editTrue={editTrue} setEditTrue={setEditTrue}
                  setEdit
                  updateThis={updateThis}
                  setUpdateThis={updateThis}
                />
            </section>
        </div>
    )}
}

const stp = state => {
    return {
        role: state.role,
        user_id: state.userid,
    }
}
  
const dtp = {}
  
export default connect(stp,dtp)(ActiveTicket);
  
