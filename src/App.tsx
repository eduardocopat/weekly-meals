import "./App.css";
import useStore from "./store";

function App() {
  const { meals, toggleLock } = useStore();

  //@TODO: add key to each tr

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
