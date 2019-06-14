import React from "react";
class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ingredient: {} };
  }
  handleInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <label>Quantity</label>
        <input onChange={this.handleInput} name={"quantity"} type='number' />
        <label>Unit</label>
        <input onChange={this.handleInput} name={"unit"} />
        <label>Name</label>
        <input onChange={this.handleInput} name={"ingredientName"} />
        <label>Notes</label>
        <input onChange={this.handleInput} name={"notes"} />
      </div>
    );
  }
}
export default Ingredient;
