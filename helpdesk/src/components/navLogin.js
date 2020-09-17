import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userLogin} from '../redux/hdAction';
import './navLog.css';
import {Button} from 'reactstrap';

//https://areallyuniquename.herokuapp.com/api/users
 
const NavLogin = props => {
    const [activeUser, setActiveUser] = useState({username: '', password: ''});

    const handleChange = e => {
        setActiveUser({...activeUser, [e.target.name]: e.target.value});
    }
       
    const submitLogin = e => {
        e.preventDefault();
        props.userLogin(activeUser);
    }

    if ( props.loginTrue === false) {
    return(
        <div className='navLogin'>
            <h2>HelpDesk</h2>
            <nav>
                <Link to='/tickets'>View Tickets</Link>
                <Link to='/newTicket'>New Ticket</Link>
            </nav>
            <form onSubmit={submitLogin}>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='text' name='password' placeholder='Password' onChange={handleChange}/>
                <Button color="secondary">Login</Button>{' '}
            </form>
        </div>
    );}
    else {
        return (
            <div className='navLogin'>
                <h2>HelpDesk</h2>
                <nav>
                    <Link to='/tickets'>View Tickets</Link>
                    <Link to='/newTicket'>New Ticket</Link>
                </nav>
                <h3>Welcome Placeholder</h3>
            </div>
        )
    }
}

const stp = state => {
    return {
        user: state.user,
        loginTrue: state.loginTrue,
    }
}

const dtp = {userLogin}

export default connect(stp,dtp)(NavLogin);