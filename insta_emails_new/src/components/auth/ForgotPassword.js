import React, { useState, useEffect } from 'react';
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import FormErrors from "../FormErrors";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';


function ForgotPassword(props) {


    const [ email, setEmail ] = useState('');
    const [ errors,setErrors ] = useState({
            cognito:null,
            blankfield:false
        });

        const clearErrorState = (errors) => {

          setErrors({
              cognito: null,
              blankfield: false
          })
      
      
        };
      
      
        const handleSubmit = async (event,state) => {
            event.preventDefault();
            // Form validation
            clearErrorState();
            const error = Validate(event, state);
            if (error) {

                setErrors({ ...state.errors, ...error })
            }
        
            // AWS Cognito integration here
            try {
              await Auth.forgotPassword(state.email);
              props.history.push('/forgotpasswordverification');
            } catch(error) {
              //console.log(error); 
            }
          }
    
          const componentDidMount = () => {
            //console.log(this.props.auth);
            ReactGA.pageview('/forgotpassword')
            ReactPixel.pageView('/forgotpassword')
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
        });

    
   
    
  return (
    <div>
      <div className="form-container">
        <h1>Forgot Your Password?</h1>
        <p>Please enter the email address associated with your account and we'll email you a password reset link.</p>
        <FormErrors formerrors={errors} />
        <form onSubmit={ e => {
               

                handleSubmit(e,{email:email.toLowerCase(),errors:errors})
            
            }}>

            <TextField
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              margin="normal"
              fullWidth
            />       
            <Button type="submit" variant="contained" color="primary" className="login-page-btn">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
