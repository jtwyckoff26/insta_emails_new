import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Button } from 'reactstrap';
import { Auth } from 'aws-amplify';
import LoadingSpinner from './LoadingSpinner';
import { makeStyles, Card, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactGA from 'react-ga';
/*
 * Fraction:
 * Stripe integration going off of this documentation:
 * https://github.com/stripe/react-stripe-elements
 */
import { StripeProvider, Elements, injectStripe } from 'react-stripe-elements';
import SubscribeForm from './StripeCard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReactPixel from 'react-facebook-pixel';
//import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  message: {
    position: 'relative',
    padding: '10px',
    paddingLeft: '35px',
    margin: '30px 10px',
    boxShadow: '0 2px 5px rgba(0,0,0,.3)',
    backgroundColor: '#7a7eff',
    color: '#FFF',
    WebkitTransition: 'all .5s ease',
    mozTransition: 'all .5s ease',
    msTransition: 'all .5s ease',
    oTransition: 'all .5s ease',
    transition: 'all .5s ease',
    '&:hover': {
      boxShadow: '0 15px 20px rgba(10,0,10,.3)',
      WebkitFilter: 'brightness(110%)',
    },
    '&:before': {
      position: 'absolute',
      display: 'block',
      top: '-21px',
      left: '50%',
      margin: '0 -21px',
      fontSize: '5px',
      lineheight: '24px',
      textAlign: 'center',
      width: '24px',
      padding: '10px',
      background: 'inherit',
      boxShadow: '0 5px 10px rgba(0,0,0,.25)',
      color: 'rgba(255,255,255,.75)',
      borderRadius: '50%',
      border: '2px solid transparent',
      zIndex: 2,
      content: '\f12a',
    },
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    minWidth: "100%"
  },
  messageCardInner: {
    background: 'rgba(250,250,250,1)',
    padding: '10px'
  },
  messageCard: {
    position: 'relative',
    padding: '10px',
    marginRight: '10px',
    marginLeft: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,.3)',
    backgroundColor: 'rgba(20,20,20,1)',
    width: '40%',
    display: 'inline-block',
    cursor: 'pointer',
    color: 'rgba(20,20,20,1)',
    WebkitTransition: 'all .5s ease',
    mozTransition: 'all .5s ease',
    msTransition: 'all .5s ease',
    oTransition: 'all .5s ease',
    transition: 'all .5s ease',
    '&:hover': {
      boxShadow: '0 15px 20px rgba(10,0,10,.3)',
      WebkitFilter: 'brightness(110%)',
    },
    '&:before': {
      position: 'absolute',
      display: 'block',
      top: '-21px',
      left: '50%',
      margin: '0 -21px',
      fontSize: '5px',
      lineheight: '24px',
      textAlign: 'center',
      width: '24px',
      padding: '10px',
      background: 'inherit',
      boxShadow: '0 5px 10px rgba(0,0,0,.25)',
      color: 'rgba(20,20,20,.75)',
      borderRadius: '50%',
      border: '2px solid transparent',
      zIndex: 2,
      content: '\f12a',
    },
  },
  messageCard2: {
    position: 'relative',
    padding: '10px',
    [theme.breakpoints.down('xs')]: {
      minWidth: "100%",
    },
    marginRight: '10px',
    marginLeft: '0px',
    boxShadow: '0 2px 5px rgba(0,0,0,.3)',
    backgroundColor: 'white',
    width: '40%',
    display: 'inline-block',
    cursor: 'pointer',
    color: 'rgba(20,20,20,1)',
    WebkitTransition: 'all .5s ease',
    mozTransition: 'all .5s ease',
    msTransition: 'all .5s ease',
    oTransition: 'all .5s ease',
    transition: 'all .5s ease',
    '&:hover': {
      boxShadow: '0 15px 20px rgba(10,0,10,.3)',
      WebkitFilter: 'brightness(110%)',
    },
    '&:before': {
      position: 'absolute',
      display: 'block',
      top: '-21px',
      left: '50%',
      margin: '0 -21px',
      fontSize: '5px',
      lineheight: '24px',
      textAlign: 'center',
      width: '24px',
      padding: '10px',
      background: 'inherit',
      boxShadow: '0 5px 10px rgba(0,0,0,.25)',
      color: 'rgba(20,20,20,.75)',
      borderRadius: '50%',
      border: '2px solid transparent',
      zIndex: 2,
      content: '\f12a',
    },
  },
  messageDesc: {
    fontSize: '14px',
    fontFamily: 'Raleway',
  },
  card: {
    width: '50%',
    paddng: '20px',
    background: 'rgba(20,20,20,1)'
  },
  cardInner: {
    background: 'rgba(250,250,250,1)',
  },
  messageTitle: {
    fontWeight: 'bold',
    fontSize: '15pt',
    lineHeight: '1.3em',
    margin: '15px 0',
  },
  container: {
    //display: 'flex',
    //flexWrap: 'wrap',
    //flexDirection: 'column',
    width: '100%',
    padding: '0.5rem',
    //marginLeft: '0.5rem',
    //marginRight: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      //marginLeft: '0.5rem',
      //marginRight: '0.5rem',
    },
  },
  textField: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '250px',
    // width: 200,
  },
  textField2: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: '250px',
    // width: 200,
  },
  title: {
    textAlign: 'left',
  },
  title2: {
    textAlign: 'left',
    fontWeight: 'bold',
    //textDecoration: 'underline',
  },
  card: {
    padding: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
    },
  },
  // button: {
  //     alignSelf: 'center',
  // },
}));

const InjectedSubscribeForm = injectStripe(SubscribeForm);

const InstaLogin = (props, value) => {
  //console.log("This: ", this);
  const classes = useStyles();
  const [subStatus, setSubStatus] = useState('');
  const [cardInfo, setCardInfo] = useState('');
  const [loading, setLoading] = useState('true');
  const [errorMessage, setErrorMessage] = useState('');
  const [tokenError, setTokenError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUsername] = useState('');
  const [passWord, setPassword] = useState('');
  //const [isLoading, setLoading] = useState('false');

  const handleLogOut = async (event) => {
    // event.preventDefault();
    try {
      Auth.signOut();
      //console.log("Signing out");
      props.auth.setAuthStatus(false);
      props.auth.setUser(null);
      sessionStorage.removeItem('user_email');
      sessionStorage.removeItem('user_id');
      props.history.push("/");
      //console.log("auth logout: ",this.props.auth)
    } catch (error) {
      console.log("Error logging out");
    }
  };

  const toggle = () => {
    var filter = document.getElementById('filter-fab');
    if (filter) {
      if (isOpen) {
        filter.setAttribute("style", "top:6em")
      } else if (props.auth && props.auth.isAuthenticated && props.auth.user) {
        filter.setAttribute("style", "top:23em")
      } else {
        filter.setAttribute("style", "top:19em")
      }
    }
    setIsOpen({
      isOpen: !isOpen,
    });
  }

  const handleSubmitInsta = async (token, coupon) => {
    // try {
    //   //console.log('Token: ', token);
    //   if (token.error) {
    //     setTokenError(token.error);
    //     setLoading('false');
    //   }
    //   else {
    //     const session = await Auth.currentSession();
    //     const idToken = session.idToken.jwtToken;
    //     setLoading('true');
    //     //console.log('token test: ', token);
    //     //console.log('token card: ', token.token.card);
    //     let body;
    //     body = JSON.stringify({
    //       token: token.token.id,
    //       name: token.token.card.name,
    //       coupon: coupon,
    //     })
    //     const res = await fetch('https://lkcg9tsh1f.execute-api.us-east-1.amazonaws.com/Dev/createStripeUser', {
    //       headers: {
    //         Authorization: idToken,
    //         //'Access-Control-Allow-Origin': '*',
    //         Accept: '*/*',
    //       },
    //       method: 'POST',
    //       body: body,
    //     });
    //     const real_res = res.clone();
    //     const result = await real_res.json();
    //     //console.log('result: ', result);
    //     if (result.error) {
    //       setErrorMessage(result.error);
    //       //setSubStatus('error');
    //       setLoading('false');
    //     } else if (result.result === 'invalid') {
    //       alert('Something went wrong! Please contact Admin@fraction.rent for help.');
    //       getSubscriptionStatus();
    //       setLoading('false');
    //     } else if (result.result === 'okay') {
    //       getSubscriptionStatus();
    //     } else {
    //       setErrorMessage('Something whack happened :(');
    //       setSubStatus('error');
    //       setLoading('false');
    //     }
    //   }
    // } catch (err) {
    //   setErrorMessage(err);
    //   setLoading('false');
    // }
  };


  useEffect(() => {
    //console.log('Use effect');
  }, [value]);

  return (
    <>
      {(() => {
        return (
          <>
            <div>
              <Card className={classes.card}>
                <div style={{ 'width': '100%', 'marginBottom': '20px' }} className={classes.messageCard2}>
                  <form className={classes.container} >
                    <div>
                      <ExpansionPanel style={{ 'borderRadius': '0px', 'outline': 'none', 'boxShadow': 'none', 'border': 'none', 'marginTop': '0px', 'padding': '0px' }} className="faq-panel genath-font">
                        <ExpansionPanelSummary style={{ 'borderRadius': '0px', 'background': 'rgba(20,20,20,1)', 'color': 'rgba(255,255,255,1)', 'borderBottom': '1px solid rgba(255,255,255,0.1)' }} expandIcon={<ExpandMoreIcon style={{ 'color': 'rgba(255,255,255,1)' }} />} aria-controls="panel1a-content" id="panel1a-header">
                          Instagram Info
                  </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={'faq-answer'}>
                          <div>
                            {/* <Typography className={classes.title2} variant="h5" gutterBottom>
                          Card Address:
                    </Typography> */}
                            <TextField
                              id="standard-search"
                              label="Instagram Username"
                              placeholder="Username"
                              type="search"
                              className={classes.textField}
                              margin="normal"
                              helperText="Required"
                              //ref={cardHolderName}
                              value={userName}
                              onChange={e => setUsername(e.target.value)}
                            />
                            <br />
                            <TextField
                              id="standard-search"
                              label="Instagram Password"
                              placeholder="Password"
                              type="search"
                              className={classes.textField}
                              margin="normal"
                              helperText="Required"
                              //ref={addressLine1}
                              value={passWord}
                              onChange={e => setPassword(e.target.value)}
                            />
                            <br />
                          </div>
                          <br />
                          <br />
                          <div>
                          <Button color="primary" onClick={handleSubmitInsta} >Add Instagram</Button>
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </>
        );
      })()}
    </>
  );
};

export default InstaLogin;
