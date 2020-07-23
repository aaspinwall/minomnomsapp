import React from "react";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", ingredientCount: 0, ingredients: [] };
    this.ingredientList = [];
    this.addIngredient();
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.idx);
  };

  addIngredient = () => {
    let cnt = this.ingredientList.length;
    let ingredient = (
      <div className='ingredientBox'>
        <input
          type='text'
          idx={cnt}
          name={"quantity"}
          onChange={this.handleChange}
        />
        <input
          type='text'
          idx={cnt}
          name={"unit"}
          onChange={this.handleChange}
        />
        <input
          type='text'
          idx={cnt}
          name={"ingredient"}
          onChange={this.handleChange}
        />
        <input
          type='text'
          idx={cnt}
          name={"notes"}
          onChange={this.handleChange}
        />
      </div>
    );
    this.ingredientList.push(ingredient);
    this.setState({ ingredientCount: this.state.ingredientCount++ });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>Ingredients:</div>
        <button id={"addButton"} type={"button"} onClick={this.addIngredient}>
          +
        </button>
        <div>
          {this.ingredientList.map((ingredient, i) => {
            return ingredient;
          })}
        </div>
        <button id={"submitButton"}>Submit</button>
      </form>
    );
  }
}
export default UserInput;
