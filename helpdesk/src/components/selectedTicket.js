import React, {useEffect, useState} from 'react';
import './ticketlist.css';
import {connect} from 'react-redux'
import { axiosWithAuth } from '../utils/axiosAuth';
import EditTicketForm from './editTicket'

const ActiveTicket = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const {title, assigned, assigned_to,  description, category, completed, tried, id} = props.selected;
    const classname = `type${completed}`;

    function setEditing() {
        let element = document.getElementById("editForm");
        element.classList.toggle("editsee");
    }

    
    

    useEffect(e => {if (props.role === 'helper'){
        setIsDisabled(false);
    }},[]);

    const makeHelper = () => {
        axiosWithAuth().put(`/tickets/${id}`, {assigned_to: props.user_id})
        .then(() => {
            props.setUpdate(!props.update);
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
        <div>
            <div>
                <h2 className='highlight'>{title} <button onClick={() => {setEditing()}}>edit</button></h2>
                <p>User: {assigned}, Helper: {assigned_to}</p>
                <p>{category}</p>
            </div>
            <div className='textbox'>
                <p>{description}</p>
                <p>Whats been tried:{tried}</p>
            </div>
            <div className={classname}>
                <button disabled={isDisabled} onClick={e => {makeHelper()}}>Claim</button>
                <p>status</p>
                <button disabled={isDisabled} onClick={e => {deleteTicket()}}>delete</button>
            </div>
            <section className='edit' id='editForm'>
                <EditTicketForm selected={props.selected} update={props.update} setUpdate={props.setUpdate} setEditing={setEditing}/>
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
  
