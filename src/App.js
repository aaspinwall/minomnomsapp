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
        <button
          onClick={e => {
            e.preventDefault();
            this.setState({ editMode: true });
            console.log(this.state.editMode);
          }}
        >
          Add recipe
        </button>
        <form className={this.state.editMode ? "editmode" : "hide"}>
          <label>Recipe name:</label>
          <input onChange={this.handleInput} name={"name"} />
          <p>Ingredients:</p>
          <Ingredient />
          <button onClick>+</button>
        </form>
      </div>
    );
  }
}

export default App;
