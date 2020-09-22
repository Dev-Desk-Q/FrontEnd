import React from "react";
import "./App.css";
import TicketList from "./components/TicketList";
import TicketCreationForm from "./components/TicketCreationForm";
import RegistrationForm from "./components/RegistrationForm";
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return( 
  <div className="App">
    <Switch>
      <Route exact path='/' component={RegistrationForm}/>
      <ProtectedRoute exact path='/protected' component={TicketList} />
      <Route exact path='/newTicket' component={TicketCreationForm} />
      <Route path='/protected/submittickets' component={TicketCreationForm} />
    </Switch>
  </div>);
}

export default App;
