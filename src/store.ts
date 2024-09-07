import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import _ from "lodash";

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

const initWeeklyMeals = (): WeeklyMeals => {
  const emptyMeal: MealType = {
    Lunch: { locked: false, recipeName: "" },
    Dinner: { locked: false, recipeName: "" },
  };

  return {
    Monday: _.cloneDeep(emptyMeal),
    Tuesday: _.cloneDeep(emptyMeal),
    Wednesday: _.cloneDeep(emptyMeal),
    Thursday: _.cloneDeep(emptyMeal),
    Friday: _.cloneDeep(emptyMeal),
    Saturday: _.cloneDeep(emptyMeal),
    Sunday: _.cloneDeep(emptyMeal),
  };
};

const useStore = create<AppState>()(
  devtools(
    persist(
      //@TODO: This is a very messy way to define this. Certainly there is a way to extract this?
      (set) => ({
        meals: initWeeklyMeals(),
        reset: () => {
          set(() => ({
            meals: initWeeklyMeals(),
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
