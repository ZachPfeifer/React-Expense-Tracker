import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { GlobalProvider } from "./context/GlobalState";
import UserProvider from './context/UserState';
import Home from './pages/Home';
import Account from './pages/Account'; 
import AccountDetails from './components/Nav/AccountDetails'; 
import Login from './components/Login/LoginForm'; 
import NavContainer from './components/Nav/NavContainer';



function App() {
  return (
    <GlobalProvider>
      <UserProvider>
        <div className="container-fluid">
          <NavContainer />

          <Switch>
            <Route exact path="/React-Expense-Tracker/" component={Home} />
            <Route exact path="/React-Expense-Tracker/account" component={Account} />
            <Route exact path="/React-Expense-Tracker/account/details" component={AccountDetails} />
            <Route exact path="/React-Expense-Tracker/login" component={Login} />
          </Switch>
        </div>
      </UserProvider>
    </GlobalProvider>
  );
}

export default App;
