import React, { useState, useEffect } from "react";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import FormErrors from "../FormErrors";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LoadingSpinner from '../LoadingSpinner.js';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';


const styles = makeStyles(theme => ({
  root: {
    background:'rgba(0,0,0,0.8)',
    color:'white',
    border: '1px solid rgba(255,255,255,0.3)',
    transition: 'border 0.5s',
    '&:hover': {
      transition: 'border 0.5s',
      background:'rgba(0,0,0,0.8)',
      border:'1px solid rgba(255,255,255,1)'
    }
  },
}));

export function Login(props) {
  const classes = styles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    cognito: null,
    blankfield: false
  });

  const clearErrorState = errors => {
    setErrors({
      cognito: null,
      blankfield: false
    });
  };

  const componentDidMount = () => {
      //console.log(this.props.auth);
      ReactGA.pageview('/login')
      ReactPixel.pageView('/login')
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
    // return function cleanup() {
    //   componentWillUnmount();
    // };
	},[]);


  const handleSubmit = async (event, state) => {
    event.preventDefault();
    //console.log(state);
    // Form validation
    clearErrorState(state.errors);
    const error = Validate(event, state);
    if (error) {
      setErrors({ ...state.errors, ...error });
    }

    setLoading(true);
    // AWS Cognito integration here
    const { username, password } = state;
    //console.log("props", props);

    try {
      //console.log("BEFORE AUTH.SIGNIN");
      const user = await Auth.signIn(username.toLowerCase(), password);
      //console.log("AFTER AUTH.SIGNIN", user);

      props.auth.setAuthStatus(true);
      props.auth.setUser(user);
      ReactGA.set({ userId: username.toLowerCase() });

      //console.log("props", props);
      // sessionStorage.user_email = props.auth.user.attributes.email;
      //sessionStorage.user_email = "patsong17@gmail.com";

      //console.log("after email", props);

      // sessionStorage.user_id = props.auth.user.attributes.sub;
      //sessionStorage.user_id = "patsong17";

      //console.log("after uiserid", props);

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
      <div style={{'background':'black','width':'100%','padding':'10px', 'display':'flex','alignItems':'center','justifyContent':'space-between'}}>
        <div className="image-over-txt">SocialScrape</div>
        <div>
        <Link to="/">
          <Button style={{'paddingLeft':'15px','background':'white','marginRight':'10px','paddingRight':'15px','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="blue">
            <div className="homePage-buttonText">
              Home
            </div>
          </Button>
        </Link>
        <Link to="/register">
          <Button style={{'paddingLeft':'15px','background':'white','paddingRight':'15px','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="blue">
            <div className="homePage-buttonText">
              Register
            </div>
          </Button>
        </Link>
        </div>
      </div> 
      <div className="navBar-Margin">
      <div style={{'maxWidth':'1000px'}} className="form-container">
        <h1>Log In</h1>
        <FormErrors formerrors={errors} />
        <form
          onSubmit={e => {
            handleSubmit(e, {
              username: username.toLowerCase(),
              password: password,
              errors: errors
            });
          }}
        >
            <div style={{'width':'100%','fontFamily':'Raleway'}}>
              <TextField
                label="Email"
                id="username"
                style={{'width':'100%', 'maxWidth':'500px','fontFamily':'Raleway'}}
                type="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                margin="normal"
                fullWidth
              />    
            </div>

            <div style={{'width':'100%','fontFamily':'Raleway'}}>
            <TextField
              label="Password"
              id="password"
              style={{'width':'100%', 'maxWidth':'500px','fontFamily':'Raleway'}}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              margin="normal"
              fullWidth
            />    
            </div>
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
          {isLoading ? (
              <LoadingSpinner />
           ) : (
          <Button className={classes.root} style={{'borderRadius':'20px','pointerEvents':'auto'}} type="submit" variant="contained" color="primary">Log In</Button>

          )}
          
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
