import { useEffect } from "react";
import "./App.css";
import useStore from "./store";
import { weeklyPlan } from "./weekly-plan";

function App() {
  const { meals, toggleLock, setMeals, reset } = useStore();

  useEffect(() => {
    console.log("Component has mounted");

    reset();
  }, [reset]);

  const generate = () => {
    weeklyPlan.generate(meals, setMeals);
  };

  return (
    <>
      <h1>Meals</h1>

      <button onClick={generate}>Generate</button>

      <br></br>

      <table border="1">
        <thead>
          <tr>
            <th>Day</th>
            <th>Lunch</th>
            <th>Dinner</th>
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
                    onChange={() => toggleLock(key, "Lunch")}
                  />
                  {meal.Lunch.recipeName}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={meal.Dinner.locked}
                    onChange={() => toggleLock(key, "Dinner")}
                  />
                  {meal.Dinner.recipeName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
