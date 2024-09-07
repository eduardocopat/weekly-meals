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

  //@TODO: add key to each tr and create it dynamically

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
          <tr>
            <td>Saturday</td>
            <td>
              {" "}
              <input
                type="checkbox"
                checked={meals.Saturday.Lunch.locked}
                onChange={() => toggleLock("Saturday", "Lunch")}
              />
              {meals.Saturday.Lunch.recipeName}
            </td>
            <td>{meals.Saturday.Dinner.recipeName}</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>
              <input
                type="string"
                value={meals.Sunday.Lunch.recipeName}
              ></input>
            </td>
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
