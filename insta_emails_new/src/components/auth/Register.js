import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import FormErrors from "../FormErrors";
import LoadingSpinner from '../LoadingSpinner.js';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

function Register(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    cognito: null,
    blankfield: false
  });

  const clearErrorState = () => {
    setErrors({
      cognito: null,
      blankfield: false,
      passwordmatch: false
    });
  };

  const componentDidMount = () => {
      //console.log(this.props.auth);
      ReactGA.pageview('/register');
      ReactPixel.pageView('/register');
      if (props.auth.user) {
          window.Intercom('boot', {
            app_id: 's67jlgg6',
            email: props.auth.user.attributes.email,
            user_id: props.auth.user.username,
            name: props.auth.user.attributes.name,
            created_at: Date.now(),
            custom_launcher_selector: '#my_custom_link' 
          });
      } else {
          window.Intercom('boot', {app_id: 's67jlgg6'});
      }
  }

  const componentWillUnmount = () => {
      window.Intercom('shutdown');
  }

  useEffect(() => {
		//console.log("use effect");
    componentDidMount();
	},[]);

  const handleSubmit = async (event, state) => {
    event.preventDefault();
    //console.log(state);
    // Form validation
    clearErrorState();
    const error = Validate(event, state);
    if (error) {
      setErrors({ ...state.errors, ...error });
    }
    setLoading(true);
    // AWS Cognito integration here
    const { username, name, password } = state;
    //console.log("reg email", username);
    //console.log("reg name", name);
    //console.log("reg lastName", lastName);
    //console.log("reg password", password);

    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          name: name,
          family_name: lastName,
          birthdate: "01/01/1990",
          //'custom:phony': phone
        }
      });
      //console.log("signupresponse: ", signUpResponse);
      const user = await Auth.signIn(username.toLowerCase(), password);
      //console.log("AFTER AUTH.SIGNIN", user);

      props.auth.setAuthStatus(true);
      props.auth.setUser(user);
      ReactGA.set({ userId: username.toLowerCase() });
      ReactPixel.track( 'CompleteRegistration', {
        content_name: 'Sign-up',
        value: 49,
        status: true,
        currency: 'USD'
      });

      //console.log("props", props);
      // sessionStorage.user_email = props.auth.user.attributes.email;
      //sessionStorage.user_email = "patsong17@gmail.com";
      //props.history.push("/welcome");
      //window.location.href = "/profile?section=subscription";
      props.history.push("/users");
    } catch (error) {
      setLoading(false);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      setErrors({
        errors,
        cognito: err
      });
    }
  };

  return (
    <div>
      <div className="navBar-Margin">
      <div className="form-container">
        <h2>Register</h2>
        <h6>Create your profile</h6>
        <FormErrors formerrors={errors} />
        <Form
          onSubmit={e => {
            handleSubmit(e, {
              username: username.toLowerCase(),
              name: name,
              lastName: lastName,
              phone: phone,
              password: password,
              errors: errors
            });
          }}
        >
          <FormGroup>
            {/* <Label for="email">Email</Label> */}
            <Input
              type="email"
              name="email"
              id="username"
              placeholder="Email (Username)"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label for="name">First Name</Label> */}
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="First Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label for="lastName">Last Name</Label> */}
            <Input
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label for="lastName">Last Name</Label> */}
            <Input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label for="password">Password</Label> */}
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            {/* <Label for="confirmPassword">Confirm Password</Label> */}
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
          <hr />
          <span className= "terms-css" >By registering for Fraction, you agree to the Terms of Service and Privacy Policy laid out below.</span>
          {isLoading ? (
              <LoadingSpinner />
           ) : (
          <Button style={{'borderRadius':'20px','border':'1px solid rgba(255,255,255,0.3)','color':'white','background':'rgba(0,0,0,0.8)','pointerEvents':'auto'}} color="primary" className="login-page-btn">
            Register
          </Button>
          )}
        </Form>
      </div>
      </div>
    </div>
  );
}

export default Register;
