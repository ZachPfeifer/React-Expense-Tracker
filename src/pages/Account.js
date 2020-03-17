import React from 'react'
import { Link } from 'react-router-dom';
import UserForm from '../components/Login/UserForm'

const Account = () => {

  return (
    <div className="login-wrapper">
      <h3>Account Registery</h3>
      <UserForm />
      <br/>
        <small className="mr-3 pr-4">
      <Link to="/React-Expense-Tracker/login">
          <p className="text-info pr-2">Already Have an Account?</p>
      </Link>
        </small>
        <br/>
    </div>
  );
}

export default Account;