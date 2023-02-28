import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  addUserPropertyPreference,
  getPropertyListFromUserID,
  getUserListFromPropertyID,
  checkUserPropertyMapping,
  deleteUserPropertyMapping,
} from "@/firebase/userLikedProperties";

import { addUserRequest } from "@/firebase/requestUser";

class App extends React.Component {
  state = {
    input1: "",
    input2: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //addUserPropertyPreference(this.state.input1, this.state.input2);
    //getPropertyListFromUserID(this.state.input1);
    //getUserListFromPropertyID(this.state.input2);
    //checkUserPropertyMapping(this.state.input1, this.state.input2);
    //deleteUserPropertyMapping(this.state.input1, this.state.input2);

    addUserRequest(this.state.input1, this.state.input2);
    console.log(this.state.input1, this.state.input2);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Input 1"
          placeholder="Enter Input 1..."
          name="input1"
          value={this.state.input1}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <br />
        <TextField
          label="Input 2"
          placeholder="Enter Input 2..."
          name="input2"
          value={this.state.input2}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default App;
