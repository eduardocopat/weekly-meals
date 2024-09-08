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
  Yield: number;
}

const mealPrep: Recipe[] = [
  { Name: "Rice+Chicken+Carrots", Type: ["meal-prep"], Yield: 6 },
  { Name: "Rice+Mince+Carrots", Type: ["meal-prep"], Yield: 6 },
  { Name: "Rice+Mince+Beetroot", Type: ["meal-prep"], Yield: 6 },
  { Name: "Rice+Strogonoff+Corn", Type: ["meal-prep"], Yield: 6 },
  { Name: "Rice+Lentill+Carrot", Type: ["meal-prep"], Yield: 6 },

  { Name: "Pasta+RedSauce+Corn", Type: ["meal-prep"], Yield: 4 },
  { Name: "Noodles+Tofu+Edamame", Type: ["meal-prep"], Yield: 4 },
  { Name: "Pasta+CarneDePanela+Cenoura", Type: ["meal-prep"], Yield: 4 },

  {
    Name: "ChickenCouscous+Feta+Cucumber+Oil+Balsamic",
    Type: ["meal-prep"],
    Yield: 4,
  },
  {
    Name: "Gnocci+Mince(RedSauce)+Carrot",
    Type: ["meal-prep"],
    Yield: 4,
  },
  {
    Name: "Quinoa+Chicken+Beetroot+CherryTomato",
    Type: ["meal-prep"],
    Yield: 4,
  },
];

const weekend: Recipe[] = [
  { Name: "Rice+Beef+Salad", Type: ["lunch", "weekend"], Yield: 0 },
  { Name: "Pork+Potato", Type: ["lunch", "weekend"], Yield: 0 },
  { Name: "[Oven] Chicken+Potato", Type: ["lunch", "weekend"], Yield: 1 },
];

const weekdays: Recipe[] = [
  { Name: "VegetableSoup", Type: ["dinner"], Yield: 1 },
  { Name: "Ravioli+Molho", Type: ["dinner"], Yield: 0 },
  {
    Name: "KumaraEnchilada(Beans+Corn)",
    Type: ["dinner", "weekday"],
    Yield: 0,
  },
];

const fridays: Recipe[] = [{ Name: "FrozenPizza", Type: ["friday"], Yield: 0 }];

const anythingElse: Recipe[] = [];

const allRecipes: Recipe[] = [
  ...mealPrep,
  ...weekend,
  ...weekdays,
  ...fridays,
  ...anythingElse,
];

export default allRecipes;
