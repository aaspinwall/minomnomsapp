import React, { useEffect, useState } from "react";
import { recipes } from "../data";
import styled from "styled-components";

export default function Main() {
  const [recipe, changeRecipe] = useState({});

  useEffect(() => {
    console.log(recipes.breakfast[0]);
  }, []);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (id.includes("ingredient")) {
      console.log("reached ingredients");
      const newIngredients = recipe.ingredients;
      newIngredients[id.split("_")[1]] = value;
      changeRecipe({ ...recipe, ingredients: newIngredients });
    } else {
      changeRecipe({ ...recipe, [id]: value });
    }
  };

  const ingredients = () => {
    if (recipe.ingredients) {
      return recipe.ingredients.map((ingredient, i) => {
        return (
          <input
            placeholder={"ingredient " + i}
            id={"ingredient_" + i}
            onChange={handleChange}
          ></input>
        );
      });
    }
  };
  const addIngredient = () => {
    if (recipe.ingredients) {
      const ingredientsCopy = recipe.ingredients;
      ingredientsCopy.push({});
      changeRecipe({
        ...recipe,
        ingredients: ingredientsCopy,
      });
    } else {
      changeRecipe({ ...recipe, ingredients: [{}] });
    }
  };

  return (
    <Container>
      <div>
        <div>Name</div>
        <div>Image</div>
        <table>
          <td>quantity</td>
          <td>unit</td>
          <td>Name</td>
          <td>Notes</td>
        </table>
      </div>
      <div>
        <div>French toast</div>
        <div>Tasty french toast image</div>
        <table>
          <th>Ingredient array</th>
          <td>1</td>
          <td>tbsp</td>
          <td>butter</td>
          <td>unsalted</td>
        </table>
      </div>
      <div className='form'>
        <input
          type='text'
          id='title'
          placeholder='title'
          value={recipe.title}
          onChange={handleChange}
        />
        {ingredients()}
        <button onClick={addIngredient}>+ ingredient</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 4rem;
  .form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    > * {
      font-size: 1rem;
      width: 100%;
      padding: 2rem;
      box-sizing: border-box;
      background: pink;
      border-radius: 10px;
    }
  }
`;
