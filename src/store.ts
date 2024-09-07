import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

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

export interface AppState {
  meals: WeeklyMeals;
  toggleLock: (day: string, MealType: keyof MealType) => void;
  setMeals: (meals: WeeklyMeals) => void;
  reset: () => void;
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

// const reset = (state: AppState) => {

// }

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        meals: initialWeeklyMeals(),
        reset: () => {
          set(() => ({
            meals: initialWeeklyMeals(),
          }));
        },
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
        setMeals: (meals: WeeklyMeals) => set((state) => (state.meals = meals)),
      }),
      {
        name: "storage",
      }
    )
  )
);

export default useStore;
