import React from 'react'
import { Link } from 'react-router-dom';
import UserIcon from '../../images/UserIcon.png'


const sideDrawer = ({ show }) => {

  
  let drawerClasses = 'side-drawer'

  if (show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li className="mx-auto">
        <li className="drawer__profile">
          <p className="mx-auto">Welcome Guest User</p>
          <img src={UserIcon} alt="Proile Pic"/>
          <p><small className="mr-1">Sign in to see Account Details</small></p>
        </li>
        </li>
        <li><Link to="/React-Expense-Tracker/">Home</Link></li>
        <li><Link to="/React-Expense-Tracker/account">Login/Register</Link></li>
      </ul>
    </nav>
  );
}

export default sideDrawer;