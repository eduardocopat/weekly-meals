import { useEffect } from "react";
import {useRecipes, type MealType } from "./RecipesProvider";
import { weeklyPlan } from "./weekly-plan";

function App() {
  const { meals, toggleLock, setMeals, reset } = useRecipes();

  useEffect(() => {
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
      <div className="container">
        <div className="columns is-vcentered is-centered">
          <div className="column is-half">
            <h1 className="title">Week meals</h1>

            <button className="button is-light" onClick={generate}>
              {" "}
              Generate
            </button>
            <br></br>
            <br></br>

            <table className="table is-fullwidth is-striped ">
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
                        <div className="is-flex">
                          <input
                            type="checkbox"
                            checked={meal.Lunch.locked}
                            onChange={() => toggleLock(key, "Lunch")}
                          />
                          <input
                            type="text"
                            className="input ml-2"
                            value={meal.Lunch.recipeName}
                            onChange={(event) => {
                              handleManualNameChange(
                                key,
                                "Lunch",
                                event.target.value
                              );
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="is-flex">
                          <input
                            type="checkbox"
                            checked={meal.Dinner.locked}
                            onChange={() => toggleLock(key, "Dinner")}
                          />
                          <input
                            type="text"
                            className="input"
                            value={meal.Dinner.recipeName}
                            onChange={(event) => {
                              handleManualNameChange(
                                key,
                                "Dinner",
                                event.target.value
                              );
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
