import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Auth } from 'aws-amplify';
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
        {this.props.auth.isAuthenticated && this.props.auth.user ? (
          <div className="home">
          <div>
            {/* <Link to="/">
              <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="green">
                <div className="homePage-buttonText">
                  Home
                </div>
              </Button>
            </Link> */}
            <Link to="/users">
              <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="blue">
                <div className="homePage-buttonText">
                  Username Search
                </div>
              </Button>
            </Link>
            <Link to="/tags">
              <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="blue">
                <div className="homePage-buttonText">
                  Hashtag Search
                </div>
              </Button>
            </Link>
            <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} onClick={this.toggle} color="primary" onClick={this.handleLogOut}>
              <div className="homePage-buttonText">
                Log Out
              </div>
            </Button>
            </div> 
          <div d="homepage-img-div2">
          <div id="homepage-img-div"> 
          <div className="image-over-txt">SocialScrape</div>
          </div>
          </div>
          </div>
        ) : (
          <div className="home">
          <div>
            {/* <Link to="/">
              <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="green">
                <div className="homePage-buttonText">
                  Home
                </div>
              </Button>
            </Link> */}
            <Link to="/login">
              <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="blue">
                <div className="homePage-buttonText">
                  Login
                </div>
              </Button>
            </Link>
            <Link to="/register">
              <Button style={{'paddingLeft':'15px','paddingRight':'15px','width':'100%','borderRadius':'20px','pointerEvents':'auto','justifyContent':'center !important'}} color="blue">
                <div className="homePage-buttonText">
                  Register
                </div>
              </Button>
            </Link>
          </div> 
          <div d="homepage-img-div2">
          <div id="homepage-img-div"> 
          <div className="image-over-txt">SocialScrape</div>
          </div>
          </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Home);