import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton'
import withUser from '../../components/Login/withUser'


const ToolBar = (props) => {

  const {
    drawerClickHandler,
    firstName,
    isLoggedIn,
    requireAuth,
  } = props

  if(requireAuth && !isLoggedIn){
    return null
  }


  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/React-Expense-Tracker/">Transaction Tracker</Link></div>
        <div className="spacer"></div>
        <div className="toolbar__navigation-items">
          <ul>
           <li className="d-flex justify-content-center">{firstName}</li> 
            <li><Link to="/React-Expense-Tracker/">Home</Link></li>
            <li><Link to="/React-Expense-Tracker/account">Login/Register</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

ToolBar.propType={
  to: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  requireAuth: PropTypes.bool,
}

ToolBar.defailtProps={
 isLoggedIn: false,
 requireAuth: false
}






export default withUser(ToolBar);