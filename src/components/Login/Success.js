import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom';


export class Success extends Component {

  continue = e => {
    e.preventDefault();
    //API SEND (FUTURE FEATURE)

    this.props.nextStep()
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Thank You for Registering</h1>
          <p>You now have an Personal Account With Transaction Tracker</p>
          <button className="btn"><Link to="/React-Expense-Tracker/">Home</Link></button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default Success