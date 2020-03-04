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
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
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

//FIXME Trash
// const styles = {
//   button: {
//     margin: 15,

//     cursor: 'pointer',
//     backgroundColor: '#bf9456!important',
//     color: '#fff',
//     border: 20,
//     display: 'block',
//     fontSize: 16
//   }
// }
// cursor: pointer;
// background - color: var(--darkGold);
// box - shadow: var(--box - shadow);
// color: var(--mainWhite);
// border: 0;
// display: block;
// font - size: 16px;
// margin: 10px 0 30px;
// padding: 10px;
// width: 100 %;
export default FormPersonalDetails