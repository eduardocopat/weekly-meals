import allRecipes, { Recipe, RecipeType } from "./recipes";
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

    const saturday = meals["Saturday"];
    const sunday = meals["Sunday"];

    //#region weekend
    const weekendRecipes = filterByType(recipes, "weekend");
    const weekendLunchRecipes = filterByType(weekendRecipes, "lunch");
    const weekendDinnerRecipes = filterByType(weekendRecipes, "dinner");

    if (saturday.Lunch.locked === false) {
      saturday.Lunch.recipeName = weekendLunchRecipes[0].Name;
      if (weekendLunchRecipes[0].Portions > 0)
        if (sunday.Lunch.locked === false)
          sunday.Lunch.recipeName = weekendLunchRecipes[0].Name;
    }

    if (sunday.Lunch.locked === false)
      sunday.Lunch.recipeName = weekendLunchRecipes[0].Name;

    if (saturday.Dinner.locked === false) {
      saturday.Dinner.recipeName = weekendDinnerRecipes[0].Name;
      if (weekendDinnerRecipes[0].Portions > 0)
        if (sunday.Dinner.locked === false)
          sunday.Dinner.recipeName = weekendDinnerRecipes[0].Name;
    }

    if (sunday.Dinner.locked === false)
      sunday.Dinner.recipeName = weekendDinnerRecipes[0].Name;
    //#endregion

    //#region mealprep
    const mealPrepRecipes = filterByType(recipes, "meal-prep");
    const sixPortions = filterByPortions(mealPrepRecipes, 6);
    const fourPortions = filterByType(mealPrepRecipes, 4);

    //#endregion

    setMeals(meals);
  },
};

const filterByType = (recipes: Recipe[], type: RecipeType): Recipe[] => {
  const filtered = recipes.filter((recipe) => recipe.Type.includes(type));

  if (filtered.length > 0) {
    return filtered;
  } else {
    const emptyRecipes: Recipe[] = [
      {
        Name: "",
        Type: [],
        Portions: 0,
      },
    ];
    return emptyRecipes;
  }
};

const filterByPortions = (recipes: Recipe[], portions: number): Recipe[] => {
  const filtered = recipes.filter((recipe) => recipe.Portions === portions);

  if (filtered.length > 0) {
    return filtered;
  } else {
    const emptyRecipes: Recipe[] = [
      {
        Name: "",
        Type: [],
        Portions: 0,
      },
    ];
    return emptyRecipes;
  }
};
