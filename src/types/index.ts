export type ingredientType = "fruta" | "verdura" | "cereal" | "grasa" | "animal" | "lacteo" | "leguminosa"

export type mealsType = "desayuno" | "comida" | "cena" | "smoothie"

export type UserType = "alejandro" | "adriana"

export type mealPortionObjectType = { [key in mealsType]: { [key in ingredientType]: number } }
