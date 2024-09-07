import allRecipes from "./recipes";
import { WeeklyMeals } from "./store";

import _ from "lodash";

interface WeeklyPlan {
  generate(meals: WeeklyMeals, setMeals: (meals: WeeklyMeals) => void): unknown;
}

export const weeklyPlan: WeeklyPlan = {
  generate: function (
    currentMeals: WeeklyMeals,
    setMeals: (meals: WeeklyMeals) => void
  ): void {
    const meals = { ...currentMeals };

    const recipes = _.shuffle(allRecipes);

    const weekendRecipes = recipes.filter((recipe) =>
      recipe.Type.includes("weekend")
    );

    //@TODO: create a separate method to filter, because if there aren't any, then return an Empty recipe
    meals["Saturday"].Lunch.recipeName = weekendRecipes[0].Name;
    setMeals(meals);
  },
};
