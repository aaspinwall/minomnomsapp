import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MealTemplate from "./MealTemplate";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", ingredients: [], cnt: 1, userIngredients: {} };
  }
  addField = () => {
    this.setState({ cnt: this.state.cnt + 1 });
  };

  userInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    const i = name[name.length - 1];
    this.setState(
      { userIngredients: { ...this.state.userIngredients, [name]: value } },
      () => {
        console.log(this.state.userIngredients);
      }
    );
  };
  removeField = e => {
    const name = e.target.name;
    const value = e.target.value;
    const i = name[name.length - 1];
    console.log(e.target);
  };
  ingredients = () => {
    let res = [];
    for (let index = 0; index < this.state.cnt; index++) {
      res.push(
        <Ingredient className='ingredient'>
          <h4>Ingredient #{index + 1}</h4>
          <div>Amount</div>
          <Input
            type='number'
            className='amount'
            name={"amount_" + index}
            min='0'
            onChange={this.userInput}
          />
          <div>Unit</div>
          <Select name={"unit_" + index} onChange={this.userInput}>
            <option>none</option>
            <option disabled={true}>----</option>
            <option>g</option>
            <option>ml</option>
            <option disabled={true}>----</option>
            <option>cups</option>
            <option>tbsp</option>
            <option>teaspoon</option>
            <option disabled={true}>----</option>
          </Select>
          <div className='label'>Ingredient</div>
          <Input
            type='text'
            name={"ingredient_" + index}
            onChange={this.userInput}
          />
          <div className='label'>Notes</div>
          <Input type='text' name={"note_" + index} onChange={this.userInput} />
          <button onClick={this.removeField}>Remove</button>
        </Ingredient>
      );
    }
    return res;
  };
  render() {
    return (
      <Wrapper className='wrapper'>
        <MealTemplate meal={mealSample} />
        <Title>
          <h4>Recipe Name</h4>
          <Input />
        </Title>
        {this.ingredients()}
        <button onClick={this.addField}>Add</button>
        <button>Preview</button>
        <button>Submit</button>
      </Wrapper>
    );
  }
}

const mealSample = {
  name: "Aguacates con huevo estrellado",
  ingredients: [
    {
      name: "Aguacate",
      quantity: 0.5,
      unit: null,
      notes: null,
    },
    {
      name: "Huevo estrellado",
      quantity: 1,
      unit: null,
      notes: null,
    },
    {
      name: "Rebanadas de jitomate en cuadritos",
      quantity: 2,
      unit: null,
      notes: null,
    },
    {
      name: "Queso de cabra espolvoreado",
      quantity: 30,
      unit: "g",
      notes: null,
    },
  ],
  img: "imgs/eggswithavocado.jpg",
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: column;
  button {
    background: white;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    margin: 0.5rem 0;
  }
`;
const Title = styled.div`
  margin-top: 2rem;
  /* padding: 1rem 2rem; */
  width: 80vw;
  h4 {
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    width: 65vw;
  }
`;
const Ingredient = styled.div`
  width: 80vw;
  h4 {
    font-weight: bold;
  }
  > div {
    padding: 0.5rem;
  }
  select {
  }

  button {
    margin: 1rem 0;
  }
  @media screen and (min-width: 768px) {
    width: 65vw;
  }
`;

const Input = styled.input`
  text-align: left;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 4px;
`;

const Select = styled.select`
  text-align: left;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 4px;
  background: white;
  justify-content: center;
  align-items: center;
`;

let mapStateToProps = st => {
  return {
    counter: st.counter,
  };
};

const mapDispatchToProps = dispatch => ({
  add: evt => dispatch({ type: "add", add: 1 }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
