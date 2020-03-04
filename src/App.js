import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { GlobalProvider } from "./context/GlobalState";
// import NavBar from './components/Nav/Navbar';
// import NavBar2 from './components/Nav/NavBar2';
import Home from './pages/Home';
import Login from './pages/Login';
import NavContainer from './components/Nav/NavContainer';




function App() {
  return (
    <GlobalProvider>
      <div className="container-fluid">
        <NavContainer />
        {/* <NavBar /> */}
        {/* <NavBar2 /> */}
        <Switch>
          <Route exact path="/React-Expense-Tracker/" component={Home} />
          <Route exact path="/React-Expense-Tracker/login" component={Login} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
