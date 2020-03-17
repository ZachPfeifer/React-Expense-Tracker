import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import LoginFrom from './LoginForm'
// import Demo from './Demo'

export class UserForm extends Component {

  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    occupation: "",
    city: "",
    bio: "",
  }
  //Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //Handle form Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state
    const { firstName, lastName, email,password, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, password, occupation, city, bio }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          //FIXME Custom TextField(trash)
          // &&
          // <Demo
          //   nextStep={this.nextStep}
          //   handleChange={this.handleChange}
          //   values={values} />
        )
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return <Success />
      case 5:
        return (
          <LoginFrom
            handleChange={this.handleChange}
            values={values}
          />
        )
      default:
        return (
        <LoginFrom 
        handleChange={this.handleChange}
        email={values.email}
        password={values.password}
        />
        )
    }
  }
}

export default UserForm
