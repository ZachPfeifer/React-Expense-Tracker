
// NOTE Custom Css
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      border: '0px solid rgba(255,255,255,.0)',
      // ColorTextFields: 'white'
      color: 'black'
    },
  },
}));


export default function ColorTextFields({ nextStep, handleChange, values }) {

  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <TextField
        variant="outlined"
        label="CUSTOM TEXTFIELDe"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        color="secondary"
        className={classes.root}
      />
      <br />
      <button
        className="btn-continue"
        onClick={nextStep}>
        Continue
          </button>
    </form>
  );
}



// //NOTE Custom TextField
// import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import TextField from 'material-ui/TextField'

// import { styled } from '@material-ui/core/styles';



// const MyTextField = styled(TextField)({
//   background: 'black',
//   transition: 'width 2s',
//   border: 0,
//   borderRadius: 3,
//   color: 'white',
//   height: 48,
//   // padding: '0 30px',
// });

// export class Demo extends Component {

//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep()
//   }

//   render() {
//     const { values, handleChange } = this.props;

//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <MyTextField
//             hintText="CUSTOM TEXTFIELD"
//             floatingLabelText="CUSTOM TEXTFIELD"
//             onChange={handleChange('firstName')}
//             defaultValue={values.firstName}

//           />
//           <br />
//           <button
//             className="btn-continue"
//             onClick={this.continue}>
//             Continue
//           </button>
//         </React.Fragment>
//       </MuiThemeProvider>
//     )
//   }
// }

// export default Demo
