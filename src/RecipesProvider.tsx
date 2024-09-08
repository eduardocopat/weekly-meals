import _ from "lodash";
import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";

export interface Meal {
  locked: boolean;
  recipeName: string;
}

export interface MealType {
  Lunch: Meal;
  Dinner: Meal;
}

export interface WeeklyMeals {
  [day: string]: MealType;
}

export interface RecipesContextValue {
  meals: WeeklyMeals;
  toggleLock: (day: string, MealType: keyof MealType) => void;
  setMeals: (meals: WeeklyMeals) => void;
  reset: () => void;
}

const initWeeklyMeals = (): WeeklyMeals => {
  const emptyMeal: MealType = {
    Lunch: { locked: false, recipeName: "" },
    Dinner: { locked: false, recipeName: "" },
  };

  return {
    Saturday: _.cloneDeep(emptyMeal),
    Sunday: _.cloneDeep(emptyMeal),
    Monday: _.cloneDeep(emptyMeal),
    Tuesday: _.cloneDeep(emptyMeal),
    Wednesday: _.cloneDeep(emptyMeal),
    Thursday: _.cloneDeep(emptyMeal),
    Friday: _.cloneDeep(emptyMeal),
  };
};

const RecipeContext = createContext<RecipesContextValue>({
  meals: initWeeklyMeals(),
  toggleLock: () => {},
  setMeals: () => {},
  reset: () => {},
});

export const useRecipes = () => useContext(RecipeContext);

export const RecipesProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const [meals, setMeals] = useState(initWeeklyMeals);

  const toggleLock = useCallback((day: string, MealType: keyof MealType) => {
    setMeals((state) => ({
      ...state,
      [day]: {
        ...state[day],
        [MealType]: {
          ...state[day][MealType],
          locked: !state[day][MealType].locked,
        },
      },
    }));
  }, []);

  const reset = useCallback(() => {
    setMeals(initWeeklyMeals);
  }, []);

  const value = useMemo(
    () => ({ meals, toggleLock, setMeals, reset }),
    [meals, toggleLock, setMeals, reset]
  );
  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};