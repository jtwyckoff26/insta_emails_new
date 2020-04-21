import React, { useState, useEffect } from 'react';
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import FormErrors from "../FormErrors";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

function ForgotPasswordVerification(props) {

    const [ verificationCode, setVerificationCode ] = useState('');

    const [ email, setEmail ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
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
                await Auth.forgotPasswordSubmit(
                state.email,
                state.verificationCode,
                state.newPassword
                );
                props.history.push('/changepasswordconfirm');
            } catch(error) {
                //console.log(error);
                setErrors({ ...state.errors, ...error })

            }
        };
        

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
        //   return function cleanup() {
        //     componentWillUnmount();
        //   };
        });
    
    
  return (
    <div>
    <div className="form-container">
    {/* {console.log("curr err:",errors)} */}

        <h1>Set new password</h1>
        <p>Please enter the verification code sent to your email address below,
            your email address and a new password.</p>
        <div className="text-align-center">

        <FormErrors formerrors={errors} />
        <form onSubmit={ e => {
                handleSubmit(e,{verificationCode:verificationCode,email:email.toLowerCase(),newPassword:newPassword,errors:errors})
            }}>
            <TextField
                label="Verification Code"
                name="verificationCode" 
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
                margin="normal"
                fullWidth
            />  

            <TextField
                label="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin="normal"
                fullWidth
            />  

            <TextField
                type="password"
                label="Password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                margin="normal"
                fullWidth
            />  

            <Button type="submit" variant="contained" color="primary" className="forgot-password-verification-btn">Submit</Button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ForgotPasswordVerification;
