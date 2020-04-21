import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Home from "./components/Home";
//import LogIn from "./components/auth/LogIn";
//import Catalog from "./components/Catalog";
import { Provider } from 'react-redux';
import configureStore from './store';
import Amplify from 'aws-amplify';
import config from './config';


Amplify.configure({
    Auth: {
      mandatorySignId: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
  });
    // const routing =(
    	// {/* <Provider store={configureStore()}>
	    //     <Router>
	    //         <Route exact path="/" component={Home} />
	    //         <Route exact path="/login" component={LogIn} />
	    //         <Route exact path="/catalog" component={Catalog} />
	    //   	</Router>
      // 	</Provider> */}
    //   );
    // const routing =(

    //     <Router>
    //         <Route exact path="/" component={Home} />
    //         {/* <Route exact path="/login" component={LogIn} /> */}
    //         <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />


    //   </Router>
    //   );

ReactDOM.render(<Provider store={configureStore()}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();