import React from 'react';

const ActiveTicket = ({selected}) => {

    const {title, assigned, assigned_to,  description, category, completed} = selected
    if (title === null ){
        return(<div className='highlight'>Please select a ticket</div>)
    }
    else {
    return(
        <div>
            <div>
                <h2 className='highlight'>{title}</h2>
                <p>User: {assigned}</p>
                <p>Helper: {assigned_to}</p>
            </div>
            <div className='textbox'>
                <p>{description}</p>
            </div>
        </div>
    )}
}


export default ActiveTicket;