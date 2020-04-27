import React from 'react';
import { useState, useRef } from 'react';
import { makeStyles, TextField, Typography, Card } from '@material-ui/core';
import { Label, Button } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';
import { ReactComponent as Mastercard } from 'payment-icons/min/flat/mastercard.svg';
import { ReactComponent as Discover } from 'payment-icons/min/flat/discover.svg';
import { ReactComponent as Amex } from 'payment-icons/min/flat/amex.svg';
import { ReactComponent as Visa } from 'payment-icons/min/flat/visa.svg';
import { ReactComponent as Security } from 'payment-icons/min/flat/security-code.svg';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapsible from 'react-collapsible';
//import Checkbox from '@material-ui/core/Checkbox';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
/*
 * Fraction:
 * Stripe integration going off of this documentation:
 * https://github.com/stripe/react-stripe-elements
 */

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

const SubscribeForm = props => {
  const classes = useStyles();
  const [subType, setSubType] = useState("basic");
  const [cardHolderName, setCardHolderName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState('US');
  const [region, setRegion] = useState('New York');
  const [coupon, setCoupon] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setcvc] = useState("");

  const handleBlur = () => {
    console.log('[blur]');
  };
  const handleChange = (change) => {
    console.log('[change]', change);
  };
  const handleClick = () => {
    console.log('[click]');
  };
  const handleFocus = () => {
    console.log('[focus]');
  };
  const handleReady = () => {
    console.log('[ready]');
  };

  const createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
          padding,
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
  };

  // const createFormFields = () => {
  //   return (

  //   );
  // };

  const handleSubmit = async ev => {
    ev.preventDefault();
    const couponArray = ["", "ONEMONTH50", "FRACSHION"];
    //console.log("Coupon: ",`-${coupon}-`);
    //console.log("Type: ",typeof coupon);
    //console.log("Index: ",couponArray.indexOf(coupon))

    if (cardNumber == "" || expDate == "" || cvc == "") {
      alert("Please fill out all fields to continue");
    }
    else if (couponArray.indexOf(coupon) < 0) {
      alert("Coupon Code Invalid");
    }
    else if (props.stripe) {
      try {
        console.log('sending token');
        const token = await props.stripe.createToken({
          name: cardHolderName,
          address_line1: addressLine1,
          address_line2: addressLine2,
          address_state: region,
          address_city: city,
          address_zip: zipcode,
          address_country: country,
        });
        props.handleToken(token, coupon);
        //console.log('token sentt');
        // }
        // else {
        //   props.handleToken(token, coupon, subType, hasInsurance, {
        //     address_line1: shippingAddressLine1,
        //     address_line2: shippingAddressLine2,
        //     address_state: shippingRegion,
        //     address_city: shippingCity,
        //     address_zip: shippingZipcode,
        //     address_country: shippingCountry,
        //   })

        // }
      } catch (err) {
        console.log('Stripe error');
      }
    } else {
      console.log('Stripejs not loaded yet');
    }
  };
  console.log("SubscribeForm rerendering");
  return (
    <div>
      <div>
        <Card className={classes.card}>
          <div onClick={() => { setSubType("") }} style={{ 'width': '100%', 'marginBottom': '20px' }} className={classes.messageCard2}>
            <Typography className={classes.title} variant="h6" gutterBottom>
              All fields must be filled in to submit:
                                    </Typography>
            <br />
            <form className={classes.container} >
              <div>
                <ExpansionPanel style={{ 'borderRadius': '0px', 'outline': 'none', 'boxShadow': 'none', 'border': 'none', 'marginTop': '0px', 'padding': '0px' }} className="faq-panel genath-font">
                  <ExpansionPanelSummary style={{ 'borderRadius': '0px', 'background': 'rgba(20,20,20,1)', 'color': 'rgba(255,255,255,1)', 'borderBottom': '1px solid rgba(255,255,255,0.1)' }} expandIcon={<ExpandMoreIcon style={{ 'color': 'rgba(255,255,255,1)' }} />} aria-controls="panel1a-content" id="panel1a-header">
                    Card Address
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={'faq-answer'}>
                    <div>
                      {/* <Typography className={classes.title2} variant="h5" gutterBottom>
                          Card Address:
                    </Typography> */}
                      <TextField
                        id="standard-search"
                        label=" Recipient Name"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        helperText="Required"
                        //ref={cardHolderName}
                        value={cardHolderName}
                        onChange={e => setCardHolderName(e.target.value)}
                      />
                      <br />
                      <TextField
                        id="standard-search"
                        label="Address Line 1"
                        placeholder=" 123 Fashion Ave"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        helperText="Required"
                        //ref={addressLine1}
                        value={addressLine1}
                        onChange={e => setAddressLine1(e.target.value)}
                      />
                      <br />
                      <TextField
                        id="standard-search"
                        label="Address Line 2"
                        placeholder=" Apt. #23"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        helperText="Optional"
                        //ref={addressLine2}
                        value={addressLine2}
                        onChange={e => setAddressLine2(e.target.value)}
                      />
                      <br />
                      <TextField
                        id="standard-search"
                        label="City"
                        placeholder=" New York"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        helperText="Required"
                        //ref={city}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                      <br />
                      <br />
                      <Label>
                        State:
                            <br />
                        <RegionDropdown
                          countryValueType="short"
                          country={country}
                          value={region}
                          onChange={val => {
                            setRegion(val);
                          }}
                        />
                        <br />
                      </Label>
                      <br />
                      <TextField
                        id="standard-search"
                        label=" Zip Code"
                        placeholder="02090"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        helperText="Required"
                        //ref={zipcode}
                        value={zipcode}
                        onChange={e => setZipcode(e.target.value)}
                      />
                      <br />
                      <Label>
                        Country {country} :
                            <br />
                        <CountryDropdown
                          onChange={val => {
                            setCountry(val);
                          }}
                          value={country}
                          valueType="short"
                        />
                        <br />
                      </Label>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <br />
                <ExpansionPanel style={{ 'borderRadius': '0px', 'outline': 'none', 'boxShadow': 'none', 'border': 'none', 'marginTop': '0px', 'padding': '0px' }} className="faq-panel genath-font">
                  <ExpansionPanelSummary style={{ 'borderRadius': '0px', 'background': 'rgba(20,20,20,1)', 'color': 'rgba(255,255,255,1)', 'borderBottom': '1px solid rgba(255,255,255,0.1)' }} expandIcon={<ExpandMoreIcon style={{ 'color': 'rgba(255,255,255,1)' }} />} aria-controls="panel1a-content" id="panel1a-header">
                    Card Info
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={'faq-answer'}>
                    <div>
                      {/* <Typography className={classes.title2} variant="h5" gutterBottom>
                          Credit Card Information:
                    </Typography> */}
                      <Mastercard style={{ 'width': '40px', 'height': '40px', 'paddingLeft': '2px', 'paddingRight': '2px', 'marginBottom': '-10px' }} />
                      <Discover style={{ 'width': '40px', 'height': '40px', 'paddingLeft': '2px', 'paddingRight': '2px', 'marginBottom': '-10px' }} />
                      <Amex style={{ 'width': '40px', 'height': '40px', 'paddingLeft': '2px', 'paddingRight': '2px', 'marginBottom': '-10px' }} />
                      <Visa style={{ 'width': '40px', 'height': '40px', 'paddingLeft': '2px', 'paddingRight': '2px', 'marginBottom': '-10px' }} />
                      {/* <img className="credit-card" src={mastercard} alt="mastercard"/>
                        <img className="credit-card" src={discover} alt="discover"/>
                        <img className="credit-card" src={amex} alt="amex"/>
                        <img className="credit-card" src={visa} alt="visa"/> */}
                      <div>
                        <br />
                        <Label style={{ 'width': '300px' }}>
                          Card Number:
                            <CardNumberElement
                            onBlur={handleBlur}
                            onChange={e => { setCardNumber(e) }}
                            onFocus={handleFocus}
                            onReady={handleReady}
                            {...createOptions('18px', '10px')}
                          />
                        </Label>
                        <br />
                        <div style={{ "display": "flex", "flexDirection": "row" }}>
                          <Label>
                            Expiration Date:
                            <CardExpiryElement
                              onBlur={handleBlur}
                              onChange={e => { setExpDate(e) }}
                              onFocus={handleFocus}
                              onReady={handleReady}
                              {...createOptions('18px', '10px')}
                            />
                          </Label>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <Label style={{ 'width': '90px' }}>
                            CVC:
                            <CardCvcElement
                              onBlur={handleBlur}
                              onChange={e => { setcvc(e) }}
                              onFocus={handleFocus}
                              onReady={handleReady}
                              {...createOptions('18px', '10px')}
                            />
                          </Label>
                          <Security style={{ 'width': '40px', 'height': '40px', 'marginLeft': '5px', 'marginRight': '2px', 'marginBottom': '-80px' }} />
                          {/* <img className="security-code" src={security} alt="security"/> */}
                        </div>
                        <br />
                        <Label style={{ 'width': '120px' }}>
                          Promo Code:
                        <TextField
                            id="standard-search"
                            label="Coupon"
                            placeholder="Coupon"
                            type="search"
                            className={classes.textField2}
                            margin="normal"
                            helperText="Optional"
                            //ref={addressLine2}
                            value={coupon}
                            onChange={e => setCoupon(e.target.value.toUpperCase())}
                          />
                        </Label>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div>
                      <Button color="primary" onClick={handleSubmit} >Add Card</Button>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

              </div>
              {props.cardInfo ? (
                <div >
                  Current Card
                  <p>{props.cardInfo.brand}</p>
                  <p>XXXX-XXXX-XXXX-{props.cardInfo.last4}</p>
                  <p>{props.cardInfo.exp_month}</p>
                  <p>{props.cardInfo.exp_year}</p>
                </div>
              ) : (
                  <div></div>
                )}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default SubscribeForm;
