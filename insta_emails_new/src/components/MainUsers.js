import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactFileReader from 'react-file-reader';
import ExportCSV from './ExportExcel';
import CSVReader from 'react-csv-reader'
import LoadingSpinner from './LoadingSpinner';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';

import "./style.css";

class MainUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      isLoading: false,
      data_rows2: [],
      sub_status: "None",
      isOpen: false,
      subStatus:"",
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ sub_status: "Loading" });
    const { shareholders } = this.state;
    var body = Object.keys(shareholders).map(function(key){
      if (shareholders[key]["name"] === "") {
        return null
      }
      else {
        return shareholders[key]["name"];
      }
    });

    body = body.filter(function(obj) { return obj });

    console.log("Shares: ",shareholders);
    console.log("Body: ",body);
    axios
      .post(
        `https://vjj7x36vf1.execute-api.us-east-1.amazonaws.com/dev`,
        {
          usernames: body
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            //'Content-Type': 'application/json',
            Accept: '*/*',
          },
        },
      )
      .then(async (response) => {
        const data = JSON.parse(response.data.body)
        console.log("Length: ",data.length)
        console.log("Item1: ",data[0])
          //console.log("data :",itemList);
          //setLoading('false');
          const createData = (number_row,original_poster,username,category,business,email,phone) => {
            return { number_row, original_poster,username,category,business,email,phone};
          }
          
          const data_rows = [];
          //console.log("Res DAta: ",res.data);
          var i;
          for (i=0;i<data.length;i++) {
          //res.data.forEach(async (item, i) => {
              data_rows.push(await createData(
                          String(i+1),
                          data[i].original_poster,
                          data[i].username,
                          data[i].category,
                          data[i].business,
                          data[i].email,
                          data[i].phone
                          ));
          };
          //console.log("Data Rows before: ",data_rows)
          this.setState({ data_rows2: data_rows });
          this.setState({ sub_status: "Done" });
          this.setState({ isLoading: false });
          console.log("Data_rows: ",this.state.data_rows2)
      }
  )     
      .catch( error => {
        this.setState({ sub_status: "None" });
        alert('Something went wrong! Make sure the user is valid or contact support.');
      });
  };

  handleSubmit_file = async (data) => {
    this.setState({ isLoading: true });
    this.setState({ sub_status: "Loading" });

    var body = []
    for (var i = 0; i < data.length; i++) {
      body.push(data[i][0])
    }

    console.log("Body: ",body);
    axios
      .post(
        `https://vjj7x36vf1.execute-api.us-east-1.amazonaws.com/dev`,
        {
          usernames: body
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            //'Content-Type': 'application/json',
            Accept: '*/*',
          },
        },
      )
      .then(async (response) => {
        const data = JSON.parse(response.data.body)
        console.log("Length: ",data.length)
        console.log("Item1: ",data[0])
          //console.log("data :",itemList);
          //setLoading('false');
          const createData = (number_row,original_poster,username,category,business,website,email,phone) => {
            return { number_row, original_poster,username,category,business,website,email,phone};
          }
          
          const data_rows = [];
          //console.log("Res DAta: ",res.data);
          var i;
          for (i=0;i<data.length;i++) {
          //res.data.forEach(async (item, i) => {
              data_rows.push(await createData(
                          String(i+1),
                          data[i].original_poster,
                          data[i].username,
                          data[i].category,
                          data[i].business,
                          data[i].website,
                          data[i].email,
                          data[i].phone
                          ));
          };
          //console.log("Data Rows before: ",data_rows)
          this.setState({ data_rows2: data_rows });
          this.setState({ sub_status: "Done" });
          this.setState({ isLoading: false });
          console.log("Data_rows: ",this.state.data_rows2)
      }
  )     
      .catch(error => {
        this.setState({ sub_status: "None" });
        alert('Something went wrong! Make sure the user is valid or contact support.');
      });
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  handleFiles = files => {
    var listy = [];
    var reader = new FileReader();
    reader.onload = function(e) {
        // Use reader.result
        listy.push(reader.result)
        console.log("Reader: ",reader)
    }
    reader.readAsText(files[0]);
    this.setState({ data_rows2: listy });
    console.log("Reader: ",this.state.data_rows2)
  };

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
    const { isLoading,data_rows2,sub_status } = this.state;

    return (
      <div>
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
          <hr />
        </div>
      <form>
        <h4>Accounts (without @)</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Account #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <div style={{display:'inline-block'}}>
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
        >
          Add Account
        </button>
        <div>
          <CSVReader onFileLoaded={(data, fileInfo) => this.handleSubmit_file(data)} />
        </div>
        </div>
        {sub_status === "Loading" ? (
          <button disabled={true}>
            Loading Content
          </button>          
        ) : (
          <button
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        )}
      </form>
      <br/>
      <div style={{ overflowX: "auto" }}>
      <Paper style={{width:"100%"}}>
        <Table style={{ "maxHeight": 440, overflow: 'auto',}} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Original</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Business?</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
            </TableRow>
          </TableHead>
          {sub_status === "None" ? (
            <TableBody>
            <TableRow key={1} variant="body" style={{ height: 48 }}>
              <TableCell component="th" scope="row">
                  {1}
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableBody>
          ) : (
          sub_status === "Loading" ? 
            <TableBody>
              <TableRow key={1} variant="body" style={{ height: 48 }}>
                <TableCell component="th" scope="row">
                  {1}
                </TableCell>
                <TableCell align="left"><LoadingSpinner/></TableCell>
                <TableCell align="left"><LoadingSpinner/></TableCell>
                <TableCell align="left"><LoadingSpinner/></TableCell>
                <TableCell align="left"><LoadingSpinner/></TableCell>
                <TableCell align="left"><LoadingSpinner/></TableCell>
                <TableCell align="left"><LoadingSpinner/></TableCell>
              </TableRow>
            </TableBody>
           : 
          <TableBody>
            {data_rows2.map(row => (
              
              <TableRow key={row.number_row} variant="body" style={{ height: 48 }}>
                <TableCell component="th" scope="row">
                  {row.number_row}
                </TableCell>
                <TableCell align="left">{row.original_poster}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.business}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          )}
        </Table>
      </Paper>
      </div>
      <br/>
      <div>
      <ExportCSV csvData={data_rows2} fileName={"test_export_main"} />
      </div>
      </div>

    );
  }
}

export default withRouter(MainUsers);