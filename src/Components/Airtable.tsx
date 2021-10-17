import React, { useEffect, useState } from "react"
import { getAirtableRecords, getAirtableSingle, getAirtableTable } from "../api/airtable"
import { getIngredientByID, getUserWithPortions } from "../api/functions"
import { ingredientType, UserType } from "../types"
import { Container } from "./Main"
import styled from "styled-components"

const MealWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

function UserPortions({ user }: any) {
  const [userPortionsObject, setPortionsObject] = useState<any>()

  useEffect(() => {
    getUserWithPortions(user).then((x) => {
      setPortionsObject(x)
    })
  }, [user])
  return (
    <>
      {userPortionsObject && (
        <MealWrapper>
          {Object.entries(userPortionsObject).map(([mealType, mealPortions]: any) => (
            <div>
              <h5>{mealType}</h5>
              {mealPortions && (
                <div>
                  {Object.entries(mealPortions)
                    .sort()
                    .map(([ingredientType, amount]: any) => (
                      <div>{`${ingredientType}: ${amount}`}</div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </MealWrapper>
      )}
    </>
  )
}

function FetchRecipe({ ingredients }: any) {
  const [state, setState] = useState<any>()

  async function fetchRecipies(ingredients: any[]) {
    return Promise.all(ingredients.filter((e) => e.length > 2).map((x) => getAirtableSingle("ingredients", x)))
  }

  useEffect(() => {
    fetchRecipies(ingredients).then((x) => {
      setState(x)
    })
  }, [ingredients])

  return state ? (
    <div>
      <>
        {state.map((ingredient: any) => (
          <div>{`${ingredient.amount} ${ingredient.amount > 1 ? ingredient.unit + "s" : ingredient.unit} ${
            ingredient.name
          }`}</div>
        ))}
      </>
    </div>
  ) : null
}

async function getAllRecipes() {
  const allRecipes = await getAirtableTable("recipes")
  const formattedRecipes = allRecipes.map((recipe: any) => ({
    [recipe.name]: Object.values(recipe)
      .filter((r) => r !== recipe.name)
      .sort()
      .map((r: any) => r[0]),
  }))
  return formattedRecipes
}

function GetRecipes() {
  const [state, setState] = useState<any>()
  useEffect(() => {
    getAllRecipes().then((x: any) => setState(x))
  }, [])

  return state ? (
    <div>
      {state.map((recipe: any) =>
        Object.entries(recipe).map(([recipeName, ingredients]) => (
          <>
            <h2>{recipeName}</h2>
            <FetchRecipe ingredients={ingredients} />
          </>
        )),
      )}
    </div>
  ) : null
}

export default function Airtable() {
  async function getPortion(ingredientType: ingredientType) {
    const [ingredient] = await getAirtableRecords("recipes", ingredientType)
    const portions = await getIngredientByID(ingredient)
    console.log(portions)
  }

  function getPortionSize(ingredient: ingredientType, portion: number) {}

  return (
    <Container>
      <div>Hello</div>
      <h4>Alejandro</h4>
      <UserPortions user={"alejandro"} />
      <h4>Adriana</h4>
      <UserPortions user={"adriana"} />
      <GetRecipes />
    </Container>
  )
}
