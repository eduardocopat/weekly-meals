export type RecipeType =
  | "dinner"
  | "lunch"
  | "meal-prep"
  | "weekend"
  | "weekday"
  | "friday";

export interface Recipe {
  Name: string;
  Type: RecipeType[];
  Portions: number;
}

const mealPrep: Recipe[] = [
  { Name: "Rice+Chicken+Carrots", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Mince+Carrots", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Mince+Beetroot", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Stroganoff+Corn", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Lentil+Carrot", Type: ["meal-prep"], Portions: 6 },

  { Name: "Pasta+RedSauce+Corn", Type: ["meal-prep"], Portions: 4 },
  { Name: "Pasta+RedSauce+Meatballs", Type: ["meal-prep"], Portions: 4 },
  { Name: "Noodles+Tofu+Edamame", Type: ["meal-prep"], Portions: 4 },
  { Name: "Pasta+CarneDePanela+Cenoura", Type: ["meal-prep"], Portions: 4 },

  {
    Name: "ChickenCouscous+Feta+Cucumber+Oil+Balsamic",
    Type: ["meal-prep"],
    Portions: 4,
  },
  {
    Name: "Gnocchi+Mince(RedSauce)+Carrot",
    Type: ["meal-prep"],
    Portions: 4,
  },
  {
    Name: "Quinoa+Chicken+Beetroot+CherryTomato",
    Type: ["meal-prep"],
    Portions: 4,
  },
];

const weekend: Recipe[] = [
  { Name: "Rice+Beef+Salad", Type: ["lunch", "weekend"], Portions: 0 },
  { Name: "Pork+Potato", Type: ["lunch", "weekend"], Portions: 0 },
  { Name: "[Oven] Chicken+Potato", Type: ["lunch", "weekend"], Portions: 1 },
  { Name: "Wrap('Fake pizza')", Type: ["dinner", "weekend"], Portions: 1 },
];

const weekdays: Recipe[] = [
  { Name: "VegetableSoup", Type: ["dinner"], Portions: 1 },
  { Name: "Ravioli+Molho", Type: ["dinner"], Portions: 0 },
  {
    Name: "KumaraEnchilada(Beans+Corn)",
    Type: ["dinner", "weekday"],
    Portions: 0,
  },
];

const fridays: Recipe[] = [
  { Name: "FrozenPizza", Type: ["friday"], Portions: 0 },
];

const anythingElse: Recipe[] = [];

const allRecipes: Recipe[] = [
  ...mealPrep,
  ...weekend,
  ...weekdays,
  ...fridays,
  ...anythingElse,
];

export default allRecipes;
