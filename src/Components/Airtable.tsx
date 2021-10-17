import React, { useEffect, useState } from "react"
import { getAirtableRecords } from "../api/airtable"
import { getIngredientByID, getUserWithPortions } from "../api/functions"
import { ingredientType, UserType } from "../types"
import { Container } from "./Main"

function UserPortions({ userPortionsObject }: any) {
  return (
    <div>
      {userPortionsObject &&
        Object.entries(userPortionsObject).map(([k, v]) => (
          <>
            <div>{k}</div>
            <div>{JSON.stringify(v, null, 4)}</div>
          </>
        ))}
    </div>
  )
}

export default function Airtable() {
  async function getPortion(ingredientType: ingredientType) {
    const [ingredient] = await getAirtableRecords("recipes", ingredientType)
    const portions = await getIngredientByID(ingredient)
    console.log(portions)
  }

  function getPortionSize(ingredient: ingredientType, portion: number) {}

  const [alejandroPortions, setAlejandro] = useState<any>()
  const [adrianaPortions, setAdriana] = useState<any>()

  useEffect(() => {
    getUserWithPortions("alejandro").then((x) => {
      setAlejandro(x)
    })
    getUserWithPortions("adriana").then((x) => {
      setAdriana(x)
    })
  }, [])

  return (
    <Container>
      <div>Hello</div>
      <h4>Alejandro</h4>
      <UserPortions userPortionsObject={alejandroPortions} />
      <h4>Adriana</h4>
      <UserPortions userPortionsObject={adrianaPortions} />
    </Container>
  )
}
