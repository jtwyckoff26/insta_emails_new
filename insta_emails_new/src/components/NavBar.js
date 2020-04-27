import React from "react";
import logo from '../images/snow image.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
  }
  render() {
    return (
      <React.Fragment>
      <div className="header-insta">
        <div className="brand-insta">
          <img src={logo} className="logo-insta" alt="Brand" />
          <h3>SocialScrape</h3>
          <input type="text" name="search" value={this.props.search} placeholder="Search" className="search_url-insta" />
        </div>
        <Link to="/users">
              <button className="add-post-insta">
                  Username Search
              </button>
            </Link>
            <Link to="/tags">
              <button className="add-post-insta">
                  Hashtag Search
              </button>
            </Link>
      </div>
      </React.Fragment>
    );
  }
}

export default Header;