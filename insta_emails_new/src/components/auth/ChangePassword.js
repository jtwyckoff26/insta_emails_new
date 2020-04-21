import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ChangePassword extends Component {
  state = {
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    //console.log("validate input",this.state)
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    if(!error){

      // AWS Cognito integration here
      try {
        const user = await Auth.currentAuthenticatedUser();
        //console.log(user);
        await Auth.changePassword(
          user,
          this.state.oldpassword,
          this.state.newpassword
        );
        window.location.href = "/changepasswordconfirm";
      } catch(error) {
        //console.log(error);
        this.setState({
          errors:{...this.state.errors, ...error}
        })

      }
    }
    
    
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    //console.log("render",this.state.errors)
    return (
      <section className="section auth">
        <div className="container">
          <h1>Change Password</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>

            <TextField
              label="Old Password"
              id="oldpassword"
              type="password"
              value={this.state.oldpassword}
              onChange={this.onInputChange}
              margin="normal"
              fullWidth
            />    

            <TextField
              label="New Password"
              id="newpassword"
              type="password"
              value={this.state.newpassword}
              onChange={this.onInputChange}
              margin="normal"
              fullWidth
            /> 
            <TextField
              label="Confirm Password"
              id="confirmpassword"
              type="password"
              value={this.state.confirmpassword}
              onChange={this.onInputChange}
              margin="normal"
              fullWidth
            /> 

          
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">

                <Button type="submit" variant="contained" color="primary" className="login-page-btn">Change Password</Button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ChangePassword;