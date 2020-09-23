import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './navLogin.css';
import {Button} from 'reactstrap';
import axios from 'axios';
import {loginUser, logoutUser } from '../redux/hdAction';
 
const NavLogin = props => {

    const [activeUser, setActiveUser] = useState({username: '', password: ''});

    const handleChange = e => {
        setActiveUser({...activeUser, [e.target.name]: e.target.value});
    }
       
    const submitLogin = e => {
        e.preventDefault();

        axios.post('https://areallyuniquename.herokuapp.com/api/users/login', activeUser)
        .then(res => {
            console.log(res);
            props.loginUser(res,activeUser.username);
            localStorage.setItem('token', res.data.token);
            props.info.history.push('/protected');
        })
        .catch(er => {
        
            console.log(er,);
        });
    }

    const lOut = e => {
        localStorage.clear('token');
        props.logoutUser();
        props.info.history.push('/');
    }


    if (props.login === false) {return(
        <div className='navLogin'>
            <h2 className= 'navHelp'>HelpDesk</h2>
            <nav>
                <a href='https://jovial-yonath-73daa5.netlify.app'>Home</a>
                <a href='https://jovial-yonath-73daa5.netlify.app/about.html'>Our Team</a>
                <a href='https://jovial-yonath-73daa5.netlify.app/contact.html'>Contact Us</a>
            </nav>
            <form onSubmit={submitLogin}>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
                <Button color="secondary">Login</Button>{' '}
            </form>
        </div>
    );}
    else if (props.login === true){
        return(
            <div className='navLogin'>
                <h2 className= 'navHelp'>HelpDesk</h2>
                <nav>
                    <a href='https://jovial-yonath-73daa5.netlify.app'>Home</a>
                    <a href='https://jovial-yonath-73daa5.netlify.app/about.html'>Our Team</a>
                    <a href='https://jovial-yonath-73daa5.netlify.app/contact.html'>Contact Us</a>
                    <Link to='/protected'>View Tickets</Link>
                    <Link to='/protected/submittickets'>New Ticket</Link>
                </nav>
            <h3>{props.message}</h3>
            <button onClick={lOut}>Logout</button>
            </div>
        );
    }
}

const stp = state => {
    return {
        message: state.message,
        login: state.login
    }
}

const dtp = {loginUser,logoutUser}

export default connect(stp,dtp)(NavLogin);