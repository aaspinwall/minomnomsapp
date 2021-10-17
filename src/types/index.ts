export type ingredientTypeEnum = "fruta" | "verdura" | "cereal" | "grasa" | "animal" | "lacteo" | "leguminosa"

export type mealsType = "desayuno" | "comida" | "cena" | "smoothie"

export type UserType = "alejandro" | "adriana"

export type IngredientType = { amount: number; unit: string; name: string; type: ingredientTypeEnum }

export type mealPortionObjectType = { [key in mealsType]: { [key in ingredientTypeEnum]: number } }
