import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class NavBar2 extends Component {

  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className="navbar mb-5">
        < div className="nav-center" >
          <div className="nav-header pt-3">
            <Link to="/React-Expense-Tracker/"> <div className="logo">
              <h4>Transaction Tracker</h4>
            </div>
            </Link>
            <button
              className="nav-btn "
              type="button"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/React-Expense-Tracker/">Home</Link>
            </li>
            <li>
              <Link to="/React-Expense-Tracker/login">login</Link>
            </li>
          </ul>
        </div >
      </nav >
    )
  }
}
