// import React, { Component } from 'react'


// export class LoginForm extends Component {

 
//   render() {
//     const { values, handleChange } = this.props;

//     console.log(values);

    
    
//     return (
//         <React.Fragment>
//        <form>
//           <label>Email Name</label>
//           <input type="text" value={values.email} onChange={handleChange} />

//           <label>Password</label>
//           <input type="password" value={values.password} onChange={handleChange} />

//           <input type="submit" />
//         </form>
//         </React.Fragment>
//     )
//   }
// }

// export default LoginForm

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'


const LoginForm = ({handleChange, email, password}) => {
  console.log(handleChange,email, password)


  return (
      <MuiThemeProvider>
      <div className="login-wrapper">
        <h3>Sign-In:</h3>
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          // onChange={handleChange('email')}
          defaultValue={email}
          />
        <br />
        <TextField
          id="filled-password-input"
          label="Password"
          floatingLabelText="Password"
          hintText="Enter Your Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          // onChange={handleChange('password')}
          defaultValue={password}
        />
        <br />
        <button
          className="btn-continue"
          >
          Sign-In
        </button>
      </div>
    </MuiThemeProvider>

   );
}
 
export default LoginForm;
