import { ingredientType, mealPortionObjectType, UserType } from "../types"
import { mealsType } from "./../types/index"
import { getAirtableRecords, getAirtableSingle, getAirtableTable } from "./airtable"

export async function getIngredientByID(ingredientID: string) {
  return getAirtableSingle("ingredients", ingredientID)
}

export async function getUserPortions(user: UserType) {
  const foodGroup = ["fruta", "verdura", "cereal", "grasa", "animal", "lacteo"]
  const mealType = await getAirtableRecords("alejandro", "type")
  const amounts = await Promise.all(foodGroup.map((foodAmt) => getAirtableRecords(user, foodAmt)))
  const userPortions = Object.fromEntries(
    mealType.map((x, i) => [x, Object.fromEntries(foodGroup.map((fg, j) => [fg, amounts[i][j]]))]),
  )
  return userPortions
}

export async function getUserWithPortions(user: UserType) {
  const res = await getAirtableTable(user)
  const resOb = {} as any
  res.forEach((x: any) => {
    const { type, ...rest } = x
    resOb[x.type] = { ...rest }
  })

  return resOb as mealPortionObjectType
}
