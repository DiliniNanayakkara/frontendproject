import React, { Component } from "react";
import ArtworkCheckoutComponent from "./ArtworkCheckoutComponent";

import '../css/Checkout.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name, type, checked } = e.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return <ArtworkCheckoutComponent handleChange={this.handleChange} {...this.state} />;
  }
}

export default App;
