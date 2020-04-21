import React, { Component, lazy, Suspense } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import LoadingSpinner from './components/LoadingSpinner.js';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from './config';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';



Amplify.configure({
    Auth: {
        mandatorySignId: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        //identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
});

ReactGA.initialize('UA-149877166-1', {
    debug: false,
    titleCase: false,
});

if (window.performance) {
    // Gets the number of milliseconds since page load
    // (and rounds the result since the value must be an integer).
    var timeSincePageLoad = Math.round(performance.now());
    //console.log("Page Load: ", timeSincePageLoad)

    // Sends the timing hit to Google Analytics.
    ReactGA.timing({
        category: 'JS Libraries',
        variable: 'load',
        value: timeSincePageLoad, // in milliseconds
        label: 'CDN libs'
    });
}
//ReactGA.pageview(window.location.pathname + window.location.search);

const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('702013887004733', options);
//ReactPixel.pageView(); 	

const Home = lazy(() => import('./components/Home'));
const MainUsers = lazy(() => import('./components/MainUsers'));
const MainTags = lazy(() => import('./components/MainTags'));
const Login = lazy(() => import('./components/auth/Login'));
const Register = lazy(() => import('./components/auth/Register'));
const ChangePassword = lazy(() => import('./components/auth/ChangePassword'));
const ChangePasswordConfirm = lazy(() => import('./components/auth/ChangePasswordConfirm'));
const ForgotPasswordVerification = lazy(() => import('./components/auth/ForgotPasswordVerification'));
const ForgotPassword = lazy(() => import('./components/auth/ForgotPassword'));

class App extends Component {
    state = {
        isAuthenticated: false,
        isAuthenticating: true,
        user: null,
    };

    setAuthStatus = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };

    setUser = user => {
        //console.log("Auth: ",Auth)
        this.setState({ user: user });
    };

    async componentDidMount() {
        try {
            const session = await Auth.currentSession();
            this.setAuthStatus(true);
            //console.log("App.js Session: ",session);
            const user = await Auth.currentAuthenticatedUser();
            this.setUser(user);
            
            ReactGA.set({ userId: user.attributes.email.toLowerCase() });
            //console.log("App.js user:", user.attributes.email);
        } catch (error) {
            //console.log("No current user");
        }
        this.setState({ isAuthenticating: false });
        // Feature detects Navigation Timing API support.

    }


    render() {
        //console.log('Rerender app');
        const authProps = {
            isAuthenticated: this.state.isAuthenticated,
            user: this.state.user,
            setAuthStatus: this.setAuthStatus,
            setUser: this.setUser,
        };
        //{console.log(authProps)}
        
        const PrivateRoute = ({ component: Component, ...rest }) => (
          <Route {...rest} render={withRouter((props) => (
            authProps.isAuthenticated === true
              ? <Component {...props} auth={authProps}/>
              : <Redirect to='/login' />
          ))} />
        )

        return (
          !this.state.isAuthenticating && (
            <div>
                    <Router basename={"/insta_emails_new"}>
                      <Switch>
                        <Suspense fallback={<div style={{'display':'flex','justifyContent':'center','alignItems':'center','height':'100vh'}}><LoadingSpinner /></div>}>
                        <Route exact path="/" render={withRouter(props => <Home {...props} auth={authProps} />)} />
                        <Route exact path="/login" render={props => <Login {...props} auth={authProps} />} />
                        <Route exact path="/register" render={props => <Register {...props} auth={authProps} />} />
                        <Route exact path="/forgotpassword" render={props => <ForgotPassword {...props} auth={authProps} />} />
                        <Route exact path="/forgotpasswordverification" render={props => <ForgotPasswordVerification {...props} auth={authProps} />}/>
                        <PrivateRoute component={MainTags} exact path="/tags" />
                        <PrivateRoute component={MainUsers} exact path="/users" />
                        <PrivateRoute component={ChangePassword} exact path="/changepassword" />
                        <PrivateRoute component={ChangePasswordConfirm} exact path="/changepasswordconfirm" />
                        </Suspense>
                        </Switch>
                    </Router>
                </div>
            )
        );
    }
}

export default App;
