import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List'


export class Confirm extends Component {

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
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <div className="confirm-wrapper">
          <h2>Confirm Your Information</h2>
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            />
            <br />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <br />
            <ListItem
              primaryText="Email"
              secondaryText={email}
            />
            <br />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <br />
            <ListItem
              primaryText="City"
              secondaryText={city}
            />
            <br />
            <ListItem
              primaryText="Bio"
              secondaryText={bio}
            />
          </List>

          <button
            className="btn-continue"
            onClick={this.continue}>
            Confrim & Continue
          </button>
          <button
            className="btn-back"
            onClick={this.back}
          >Back</button>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Confirm