import allRecipes, { Recipe, RecipeType } from "./recipes";
import { WeeklyMeals } from "./RecipesProvider";

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
    const monday = meals["Monday"];
    const tuesday = meals["Tuesday"];
    const wednesday = meals["Wednesday"];
    const thursday = meals["Thursday"];
    const friday = meals["Friday"];

    //#region weekend
    const weekendRecipes = filterByType(recipes, "weekend");
    const weekendLunchRecipes = filterByType(weekendRecipes, "lunch");
    const weekendDinnerRecipes = filterByType(weekendRecipes, "dinner");

    let sundayLeftovers = false;
    if (saturday.Lunch.locked === false) {
      saturday.Lunch.recipeName = weekendLunchRecipes[0].Name;
      if (weekendLunchRecipes[0].Portions > 0)
        if (sunday.Lunch.locked === false) {
          sundayLeftovers = true;
          sunday.Lunch.recipeName = weekendLunchRecipes[0].Name;
        }
    }

    if (sunday.Lunch.locked === false && !sundayLeftovers)
      sunday.Lunch.recipeName = weekendLunchRecipes[1].Name;

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
    const fourPortions = filterByPortions(mealPrepRecipes, 4);

    if (monday.Lunch.locked === false) {
      monday.Lunch.recipeName = sixPortions[0].Name;
      wednesday.Lunch.recipeName = sixPortions[0].Name;
      friday.Lunch.recipeName = sixPortions[0].Name;
    }
    if (tuesday.Lunch.locked === false) {
      tuesday.Lunch.recipeName = fourPortions[0].Name;
      thursday.Lunch.recipeName = fourPortions[0].Name;
    }
    //#endregion

    //#region dinners
    const dinnerRecipes = _.uniqBy(filterByType(recipes, "dinner"), "Type");

    let leftoversForWednesday = false;

    if (monday.Dinner.locked === false) {
      monday.Dinner.recipeName = dinnerRecipes[0].Name;
      if (wednesday.Dinner.locked == false)
        if (dinnerRecipes[0].Portions > 0) {
          wednesday.Dinner.recipeName = dinnerRecipes[0].Name;
          leftoversForWednesday = true;
        }
    }

    if (wednesday.Dinner.locked === false && !leftoversForWednesday)
      wednesday.Dinner.recipeName = dinnerRecipes[1].Name;

    let leftoversForThursday = false;
    if (tuesday.Dinner.locked === false) {
      tuesday.Dinner.recipeName = dinnerRecipes[2].Name;
      if (thursday.Dinner.locked == false)
        if (dinnerRecipes[2].Portions > 0) {
          thursday.Dinner.recipeName = dinnerRecipes[2].Name;
          leftoversForThursday = true;
        }
    }

    if (thursday.Dinner.locked == false && !leftoversForThursday)
      thursday.Dinner.recipeName = dinnerRecipes[3].Name;

    //Trash friday
    const fridayRecipes = filterByType(recipes, "friday");
    if (friday.Dinner.locked == false)
      friday.Dinner.recipeName = fridayRecipes[0].Name;

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
