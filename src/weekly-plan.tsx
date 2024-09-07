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

    //@TODO: create a separate method to filter, because if there aren't any, then return an Empty recipe
    const weekendRecipes = recipes.filter((recipe) =>
      //@TODO: move to constants
      recipe.Type.includes("weekend")
    );

    meals["Saturday"].Lunch.recipeName = weekendRecipes[0].Name;

    const mealPreps = recipes.filter((recipe) =>
      //@TODO: move to constants
      recipe.Type.includes("meal-prep")
    );

    meals["Monday"].Lunch.recipeName = mealPreps[0].Name;
    //if has leftovers... blablabla
    meals["Wednesday"].Lunch.recipeName = mealPreps[0].Name;
    meals["Friday"].Lunch.recipeName = mealPreps[0].Name;

    setMeals(meals);
  },
};
