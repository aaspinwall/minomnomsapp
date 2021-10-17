import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getAirtableRecords, getAirtableSingle, getAirtableTable } from "../api/airtable"
import { getIngredientByID, getUserWithPortions } from "../api/functions"
import { MEALS } from "../data/constants"
import { IngredientType, ingredientTypeEnum, mealPortionObjectType, mealsType } from "../types"
import { Container } from "./Main"
import { Flex, Box } from "reflexbox/styled-components"

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

function FetchRecipe({ ingredients, mealType }: { ingredients: IngredientType[]; mealType: mealsType }) {
  const [ingredientsInRecipe, setIngredients] = useState<IngredientType[]>()
  const [adriana, setAdriana] = useState<mealPortionObjectType | undefined>()
  const [alejandro, setAlejandro] = useState<mealPortionObjectType | undefined>()

  async function fetchRecipies(ingredients: any[]) {
    const ingredientIds = ingredients.filter((e) => e.includes("rec"))
    console.log(ingredientIds)
    return Promise.all(ingredientIds.map((x) => getAirtableSingle("ingredients", x)))
  }

  useEffect(() => {
    fetchRecipies(ingredients).then((x) => {
      setIngredients(x)
    })
    getUserWithPortions("adriana").then((x) => setAdriana(x))
    getUserWithPortions("alejandro").then((x) => setAlejandro(x))
  }, [ingredients])

  return ingredientsInRecipe && adriana && alejandro ? (
    <div>
      <>
        {ingredientsInRecipe.map((ingredient: IngredientType) => {
          const { amount, unit, name, type } = ingredient
          const multAdriana = adriana[mealType][type]
          const multAlejandro = alejandro[mealType][type]
          if (!unit || !amount || !multAlejandro) return

          const note = multAdriana !== multAlejandro

          return (
            <Box m={1}>
              <div>{`${amount * multAdriana} ${amount > 1 ? unit + "s" : unit} ${name.toLowerCase()}`}</div>
              {note && (
                <>
                  <div>Alejandro</div>
                  <div>{`${amount * multAlejandro} ${amount > 1 ? unit + "s" : unit} ${name.toLowerCase()}`}</div>
                </>
              )}
            </Box>
          )
        })}
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
      .map((r: any) => (r instanceof Array ? r[0] : r)),
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
        Object.entries(recipe).map(([recipeName, ingredientsWithType]: any) => {
          const mealType = ingredientsWithType.filter((y: any) => MEALS.includes(y))

          return (
            <>
              <h2>{recipeName}</h2>
              <FetchRecipe mealType={mealType} ingredients={ingredientsWithType} />
            </>
          )
        }),
      )}
    </div>
  ) : null
}

export default function Airtable() {
  async function getPortion(ingredientType: ingredientTypeEnum) {
    const [ingredient] = await getAirtableRecords("recipes", ingredientType)
    const portions = await getIngredientByID(ingredient)
    console.log(portions)
  }

  function getPortionSize(ingredient: ingredientTypeEnum, portion: number) {}

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
