type RecipeType = "dinner" | "lunch" | "meal-prep" | "weekend" | "weekday";

interface Recipe {
  Name: string;
  Type: RecipeType[];
  Yield: number;
}

const mealPrep: Recipe[] = [
  { Name: "Rice+Chicken+Carrots", Type: ["meal-prep"], Yield: 6 },
  { Name: "Rice+Mince+Carrots", Type: ["meal-prep"], Yield: 6 },
  { Name: "Pasta+RedSauce+Corn", Type: ["meal-prep"], Yield: 4 },
  { Name: "Noodles+Tofu+Edamame", Type: ["meal-prep"], Yield: 4 },
  {
    Name: "ChickenCouscous+Feta+Cucumber+Oil+Balsamic",
    Type: ["meal-prep"],
    Yield: 4,
  },
];

const weekend: Recipe[] = [
  { Name: "Rice+Beef+Salad", Type: ["lunch", "weekend"], Yield: 0 },
  { Name: "Pork+Potato", Type: ["lunch", "weekend"], Yield: 0 },
  { Name: "[Oven] Chicken+Potasto", Type: ["lunch", "weekend"], Yield: 1 },
];

const weekdays: Recipe[] = [
  { Name: "VegetableSoup", Type: ["dinner"], Yield: 1 },
  { Name: "VegetableSoup", Type: ["dinner"], Yield: 1 },
  {
    Name: "KumaraEnchilada(Beans+Corn)",
    Type: ["dinner", "weekday"],
    Yield: 0,
  },
];

const allRecipes: Recipe[] = [...mealPrep, ...weekend, ...weekdays];

export default allRecipes;
