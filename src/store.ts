import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface Meal {
  locked: boolean;
  recipeName: string;
}

interface MealType {
  Lunch: Meal;
  Dinner: Meal;
}

interface WeeklyMeals {
  [day: string]: MealType;
}

interface AppState {
  meals: WeeklyMeals;
  toggleLock: (day: string, MealType: keyof MealType) => void;
}

const initialWeeklyMeals = (): WeeklyMeals => {
  const emptyMeal: MealType = {
    Lunch: { locked: false, recipeName: "" },
    Dinner: { locked: false, recipeName: "" },
  };

  return {
    Monday: emptyMeal,
    Tuesday: emptyMeal,
    Wednesday: emptyMeal,
    Thursday: emptyMeal,
    Friday: emptyMeal,
    Saturday: emptyMeal,
    Sunday: emptyMeal,
  };
};

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        meals: initialWeeklyMeals(),
        toggleLock: (day: string, MealType: keyof MealType) =>
          set((state) => ({
            meals: {
              ...state.meals,
              [day]: {
                ...state.meals[day],
                [MealType]: {
                  ...state.meals[day][MealType],
                  locked: !state.meals[day][MealType].locked,
                },
              },
            },
          })),
      }),
      {
        name: "storage",
      }
    )
  )
);

export default useStore;
