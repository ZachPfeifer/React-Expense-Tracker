import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton'

const ToolBar = ({ drawerClickHandler }) => {
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
            <li><Link to="/React-Expense-Tracker/">Home</Link></li>
            <li><Link to="/React-Expense-Tracker/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default ToolBar;