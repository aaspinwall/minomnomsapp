import React from "react";
import "./App.css";
import recipes from "./data";
import { stat } from "fs";

let selectedMeals = [];

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pawState: false };
  }
  render() {
    return (
      <nav className='navbar'>
        <img
          onClick={() => this.setState({ pawState: !this.state.pawState })}
          className={this.state.pawState ? "pawOpen" : "pawClosed"}
          src='imgs/paw.png'
          alt='paw'
        />
      </nav>
    );
  }
}

let myMeals = recipes.breakfast
  .concat(recipes.dinner)
  .concat(recipes.lunch)
  .concat(recipes.smoothies);

class Filtered extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: "", filterVisibility: true };
    this.meals = myMeals;
  }
  handleChange = event => {
    this.setState({ filtered: event.target.value });
    this.meals = myMeals.filter(
      mealObj =>
        mealObj.ingredients.some(
          ingredient =>
            this.find(event.target.value, ingredient.name) ||
            this.find(event.target.value, ingredient.notes)
        ) || this.find(event.target.value, mealObj.name)
    );
  };

  find(query, obj) {
    let reg = new RegExp(query, "i");
    console.log(reg);
    return reg.test(obj);
  }

  render() {
    return (
      <div className={"mainContainer"}>
        {/* <Store sendtoGrandparent={this.props.sendtoGrandparent} /> */}
        <form
          className={this.state.filterVisibility ? "searchBox" : "hide"}
          onSubmit={e => e.preventDefault()}
        >
          <h3>Filtrar por</h3>
          <label>Ingrediente: </label>
          <input type='text' onChange={this.handleChange} />
          <div>
            <button
              onClick={() => {
                this.setState({
                  filterVisibility: !this.state.filterVisibility,
                });
              }}
              className='searchBoxX'
            >
              X
            </button>
            <button
              onClick={() => {
                this.meals = recipes.breakfast;
                this.setState({ filter: "" });
              }}
            >
              Desayunos
            </button>
            <button
              onClick={() => {
                this.meals = recipes.lunch;
                this.setState({ filter: "" });
              }}
            >
              Comidas
            </button>
            <button
              onClick={() => {
                this.meals = recipes.dinner;
                this.setState({ filter: "" });
              }}
            >
              Cenas
            </button>
            <button
              onClick={() => {
                this.meals = recipes.smoothies;
                this.setState({ filter: "" });
              }}
            >
              Smoothies
            </button>
            <button
              onClick={() => {
                this.meals = recipes.breakfast
                  .concat(recipes.dinner)
                  .concat(recipes.smoothies);
                this.setState({ filter: "" });
              }}
            >
              Clear
            </button>
          </div>
        </form>
        {this.meals.map(meal => (
          <Meal
            meal={meal}
            key={"meal-" + meal.name}
            sendtoGrandparent={this.props.sendtoGrandparent}
          />
        ))}
      </div>
    );
  }
}

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "mealContainer", selected: false };
  }
  select = event => {
    this.setState(
      {
        selected: !this.state.selected,
      },
      () => {
        this.props.sendtoGrandparent(this.props.meal, this.state.selected);
        this.setState({
          className: this.state.selected
            ? "mealContainer selected"
            : "mealContainer",
        });
      }
    );
    selectedMeals.push(this.props.meal);
  };
  render() {
    const meal = this.props.meal;
    return (
      <div className={this.state.className} onClick={this.select}>
        <img src={meal.img ? meal.img : ""} alt={"whatever"} />
        <div>
          <h3>{meal.name.toUpperCase()}</h3>
          <ul>
            {meal.ingredients.map((ingredient, i) => {
              return (
                <li key={"ingredients-" + ingredient.name + i}>
                  <b>
                    {`
                  ${ingredient.quantity > 0 ? ingredient.quantity : ""} 
                  ${ingredient.unit ? ingredient.unit : ""} `}
                  </b>
                  {`
                  ${ingredient.name}
                  ${ingredient.notes ? ingredient.notes : ""}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
/* class Store extends React.Component {
  render() {
    console.log(selectedMeals);
    return (
      <div>
        {selectedMeals.map(meal => {
          return <div>{meal.name}</div>;
        })}
      </div>
    );
  }
} */

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMeals: [],
      editMode: false,
    };
  }

  handleChange = (meal, flag) => {
    this.setState(
      {
        selectedMeals: flag
          ? [...selectedMeals].concat([meal])
          : selectedMeals.filter(mealinlist => {
              return mealinlist.name === meal.name;
            }),
      },
      () => {
        //console.log(`Flag is: ${flag} & meal is ${meal.name}`);
        //console.log(selectedMeals);
      }
    );
  };
  handleInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value }, console.log(this.state));
  };

  render() {
    return (
      <div>
        <Nav />
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
