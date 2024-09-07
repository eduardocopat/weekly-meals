type RecipeType = "dinner" | "lunch" | "meal-prep" | "weekend" | "weekday";

interface Recipe {
  Name: string;
  Type: RecipeType[];
  Leftovers: number;
}

const mealPrep: Recipe[] = [
  { Name: "Rice+Chicken+Carrots", Type: ["meal-prep"], Leftovers: 6 },
  { Name: "Rice+Mince+Carrots", Type: ["meal-prep"], Leftovers: 6 },
  { Name: "Pasta+RedSauce+Corn", Type: ["meal-prep"], Leftovers: 4 },
  { Name: "Noodles+Tofu+Edamame", Type: ["meal-prep"], Leftovers: 4 },
  {
    Name: "ChickenCouscous+Feta+Cucumber+Oil+Balsamic",
    Type: ["meal-prep"],
    Leftovers: 4,
  },
];

const weekend: Recipe[] = [
  { Name: "Rice+Beef+Salad", Type: ["lunch", "weekend"], Leftovers: 0 },
  { Name: "Pork+Potato", Type: ["lunch", "weekend"], Leftovers: 0 },
  { Name: "[Oven] Chicken+Potato", Type: ["lunch", "weekend"], Leftovers: 1 },
];

const weekdays: Recipe[] = [
  { Name: "VegetableSoup", Type: ["dinner"], Leftovers: 1 },
  {
    Name: "KumaraEnchilada(Beans+Corn)",
    Type: ["dinner", "weekday"],
    Leftovers: 0,
  },
];

const allRecipes: Recipe[] = [...mealPrep, ...weekend, ...weekdays];

export default allRecipes;
