import React from "react";
import "./App.css";
import Filtered from "./Filtered";
import Ingredient from "./Ingredient";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  handleChange = () => {};
  handleInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value }, console.log(this.state));
  };

  render() {
    return (
      <div>
        <Filtered sendtoGrandparent={this.handleChange} />
      </div>
    );
  }
}

export default App;
