import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Auth } from 'aws-amplify';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      subStatus:"",
    };
}

toggle() {
  var filter = document.getElementById('filter-fab');
  if (filter) {
    if (this.state.isOpen) {
      filter.setAttribute("style","top:6em")
    } else if (this.props.auth && this.props.auth.isAuthenticated && this.props.auth.user) {
      filter.setAttribute("style","top:23em")
    } else {
      filter.setAttribute("style","top:19em")
    }
  }
  this.setState({
    isOpen: !this.state.isOpen,
  });
}

handleLogOut = async event => {
  // event.preventDefault();
  try {
    Auth.signOut();
    //console.log("Signing out");
    this.props.auth.setAuthStatus(false);
    this.props.auth.setUser(null);
    sessionStorage.removeItem('user_email');
    sessionStorage.removeItem('user_id');
    this.props.history.push("/");
    //console.log("auth logout: ",this.props.auth)
  } catch (error) {
    console.log("Error logging out");
  }
};

  render() {
    //{console.log(this)}

    return (
      <React.Fragment>
        <NavBar history={this.props.history} auth={this.props.auth}/>
          <div d="homepage-img-div2">
          <div id="homepage-img-div"> 
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);