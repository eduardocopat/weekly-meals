import { useState } from "react";
import "./App.css";

interface Meal {
  locked: boolean;
  recipeName: string;
}

interface MealType {
  Lunch: Meal;
  Dinner: Meal;
}

interface WeeklyMeals {
  Monday: MealType;
  Tuesday: MealType;
  Wednesday: MealType;
  Thursday: MealType;
  Friday: MealType;
  Saturday: MealType;
  Sunday: MealType;
}

const createEmptyWeeklyMeals = (): WeeklyMeals => {
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

function App() {
  const [meals, setMeals] = useState(createEmptyWeeklyMeals());

  return (
    <>
      <h1>Meals</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Day</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Saturday</td>
            <td>{meals.Saturday.Lunch.recipeName}</td>
            <td>{meals.Saturday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>{meals.Sunday.Lunch.recipeName}</td>
            <td>{meals.Sunday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>{meals.Monday.Lunch.recipeName}</td>
            <td>{meals.Monday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>{meals.Tuesday.Lunch.recipeName}</td>
            <td>{meals.Tuesday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>{meals.Wednesday.Lunch.recipeName}</td>
            <td>{meals.Wednesday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>{meals.Thursday.Lunch.recipeName}</td>
            <td>{meals.Thursday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>{meals.Friday.Lunch.recipeName}</td>
            <td>{meals.Friday.Dinner.recipeName}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
