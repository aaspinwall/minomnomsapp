import React from "react";
import "./App.css";
import recipes from "./data";

let selectedMeals = [];

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <a href='./'>
          <img src='imgs/paw.png' alt='paw' />
        </a>
      </nav>
    );
  }
}

let myMeals = recipes.breakfast
  .concat(recipes.dinner)
  .concat(recipes.smoothies);

/* class MyDay extends React.Component {
  render() {
    return (
      <div className={"mainContainer"}>
        {myMeals.map(meal => (
          <Meal meal={meal} key={"meal-" + meal.name} />
        ))}
      </div>
    );
  }
} */
class Filtered extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: "" };
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
        <form className={"searchBox"} onSubmit={e => e.preventDefault()}>
          <h3>Filtrar por</h3>
          <label>Ingrediente: </label>
          <input type='text' onChange={this.handleChange} />
          <div>
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
          <Meal meal={meal} key={"meal-" + meal.name} />
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
    /*     const styled = {
      objectFit: "cover",
      height: "15rem",
      width: "10rem",
      borderRadius: "30px",
      padding: "1rem",
    }; */
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
class Store extends React.Component {
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
}

function App() {
  return (
    <div>
      <Nav />
      <Store />
      <Filtered />
    </div>
  );
}

export default App;
