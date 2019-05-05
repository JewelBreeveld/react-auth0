import React, { Component } from "react";

class Callback extends Component {
  componentDidMount() {
    //Handle authentication if expected values are in the url
    if (/acces_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL");
    }
  }

  render() {
    return <h1>Getting ready ..... !!</h1>;
  }
}

export default Callback;
