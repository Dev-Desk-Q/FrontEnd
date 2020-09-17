import React from "react";
import "./App.css";
import TicketList from "./components/TicketList";
import TicketCreationForm from "./components/TicketCreationForm";
import Ticket from "./components/Ticket";
import RegistrationForm from "./components/RegistrationForm";
import NavLogin from './components/navLogin';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return( 
  <div className="App">
    <Switch>
      <Route exact path='/' component={RegistrationForm}/>
      <ProtectedRoute exact path='/protected' component={TicketList} />
    </Switch>
  </div>);
}

export default App;
