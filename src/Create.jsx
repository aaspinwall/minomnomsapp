import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MealTemplate from "./MealTemplate";
import { format } from "util";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredients: [],
      cnt: 1,
      newRecipe: { name: "", ingredients: [{}] },
      fetchedImages: "imgs/chopped.jpg",
    };
  }
  addField = () => {
    this.setState({
      cnt: this.state.cnt + 1,
      newRecipe: {
        ...this.state.newRecipe,
        ingredients: this.state.newRecipe.ingredients.concat({}),
      },
    });
  };

  removeField = e => {
    const name = e.target.name;
    const i = Number(name);
    this.setState({
      newRecipe: {
        ...this.state.newRecipe,
        ingredients: this.state.newRecipe.ingredients.filter(
          (ingredient, j) => {
            return i !== j;
          }
        ),
      },
    });
  };
  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    const index = Number(name.split("_")[1]);
    const type = name.split("_")[0];
    //check for empty values
    value = value === "none" ? null : value;

    if (name === "name") {
      this.setState(
        { newRecipe: { ...this.state.newRecipe, name: value } },
        () => console.log(this.state.newRecipe)
      );
    } else {
      this.setState(
        {
          newRecipe: {
            name: this.state.newRecipe.name,
            ingredients: this.state.newRecipe.ingredients.map((recipe, i) => {
              if (i === index) {
                return { ...recipe, [type]: value };
              } else return recipe;
            }),
          },
        },
        () => console.log(this.state.newRecipe)
      );
    }
  };
  ingredients = () => {
    let res = [];
    for (
      let index = 0;
      index < this.state.newRecipe.ingredients.length;
      index++
    ) {
      res.push(
        <Ingredient className='ingredient'>
          <h4>Ingredient #{index + 1}</h4>
          <div>Amount</div>
          <Input
            type='number'
            className='amount'
            name={"quantity_" + index}
            min='0'
            value={this.state.newRecipe.ingredients[index].quantity}
            onChange={this.handleChange}
          />
          <div>Unit</div>
          <Select
            name={"unit_" + index}
            value={this.state.newRecipe.ingredients[index].unit}
            onChange={this.handleChange}
          >
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
            name={"name_" + index}
            value={this.state.newRecipe.ingredients[index].name}
            onChange={this.handleChange}
          />
          <div className='label'>Notes</div>
          <Input
            type='text'
            name={"notes_" + index}
            value={this.state.newRecipe.ingredients[index].notes}
            onChange={this.handleChange}
          />
          <button name={index} onClick={this.removeField}>
            Remove
          </button>
        </Ingredient>
      );
    }
    return res;
  };
  submit = e => {
    let formData = new FormData();
    formData.append("myImage", this.state.image);
    e.preventDefault();
    fetch("/image", {
      // Your POST endpoint
      method: "POST",
      body: formData, // This is your file object
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ fetchedImages: res.response[0] });
      });
  };
  getImages = async () => {
    const response = await fetch("images");
    const body = await response.json();
    const array = await body.response;
    console.log(this.state.fetchedImages);
  };

  render() {
    return (
      <Wrapper className='wrapper'>
        <h2>Add a new meal</h2>
        <MealTemplate
          meal={{ ...this.state.newRecipe, img: this.state.fetchedImages }}
        />

        <Title>
          <h4>Recipe Name</h4>
          <Input
            name='name'
            value={this.state.newRecipe.name}
            onChange={this.handleChange}
          />
        </Title>
        <UploadForm
          type='file'
          id='upload'
          onChange={e =>
            this.setState({ image: e.target.files[0] }, () => {
              console.log(this.state.image);
            })
          }
        />
        {this.ingredients()}
        <button onClick={this.addField}>Add</button>
        <button onClick={this.submit}>Submit</button>
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

const UploadForm = styled.input`
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: "Add an image";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  :hover::before {
    border-color: black;
  }
  :active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
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
