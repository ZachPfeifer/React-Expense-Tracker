import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'


export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <button
            className="btn-continue"
            onClick={this.continue}>
            Continue
          </button>
          <button
            className="btn-back"
            onClick={this.back}
          >Back</button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormPersonalDetails