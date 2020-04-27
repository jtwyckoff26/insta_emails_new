import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import "./style.css";
const { IgApiClient } = require('instagram-private-api');



class Insat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      isLoading: false,
      data_rows2: [],
      sub_status: "None",
      isOpen: false,
      subStatus: "",
    };
  }

  async componentDidMount() {
    (async () => {
      const ig = new IgApiClient();
      ig.state.generateDevice("xtest2694");
      //ig.state.proxyUrl = process.env.IG_PROXY;
      const auth = await ig.account.login("xtest2694", "Tanner2694");
      const followersFeed = ig.feed.accountFollowers(auth.pk);
      const wholeResponse = await followersFeed.request();
      console.log(wholeResponse); // You can reach any properties in instagram response
    })();
  };

render() {

  return (
    <div>
    </div>

  );
}
}

export default withRouter(Insat);