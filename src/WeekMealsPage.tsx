import { useEffect } from "react";
import { useRecipes, MealType } from "./RecipesProvider";
import { weeklyPlan } from "./weekly-plan";

export const WeekMealsPage: React.FC = () => {
  const { meals, toggleLock, setMeals, reset } = useRecipes();

  useEffect(() => {
    console.log("Component has mounted");

    reset();
  }, [reset]);

  const generate = () => {
    weeklyPlan.generate(meals, setMeals);
  };

  const handleManualNameChange = (
    key: string,
    mealType: keyof MealType,
    value: any
  ) => {
    const changedMeals = { ...meals };

    var day = meals[key];
    day[mealType].recipeName = value;
    setMeals(changedMeals);
  };

  return (
    <>
      <h1>Week meals</h1>

      <button onClick={generate}>Generate</button>
      <br></br>
      <br></br>

      <table border={1}>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Lunch</th>
            <th scope="col">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(meals).map((key) => {
            const meal = meals[key];

            return (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={meal.Lunch.locked}
                    onChange={() => toggleLock(key, "Lunch")} />
                  <input
                    type="text"
                    value={meal.Lunch.recipeName}
                    onChange={(event) => {
                      handleManualNameChange(key, "Lunch", event.target.value);
                    }} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={meal.Dinner.locked}
                    onChange={() => toggleLock(key, "Dinner")} />
                  <input
                    type="text"
                    value={meal.Dinner.recipeName}
                    onChange={(event) => {
                      handleManualNameChange(key, "Dinner", event.target.value);
                    }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
