import React from 'react'
import { Link } from 'react-router-dom';


const sideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer'

  if (show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/React-Expense-Tracker/">Home</Link></li>
        <li><Link to="/React-Expense-Tracker/account">Login</Link></li>
      </ul>
    </nav>
  );
}

export default sideDrawer;