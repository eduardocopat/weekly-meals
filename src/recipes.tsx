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
  { Name: "Rice+Chicken+BrusselSprouts", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Mince+Carrots", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Mince+Beetroot", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Stroganoff+Corn", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Lentil+Carrot", Type: ["meal-prep"], Portions: 6 },
  { Name: "Rice+Chicken+GreenBeans", Type: ["meal-prep"], Portions: 6 },

  { Name: "Pasta+RedSauce+Corn", Type: ["meal-prep"], Portions: 4 },
  { Name: "Pasta+RedSauce+Meatballs", Type: ["meal-prep"], Portions: 4 },
  { Name: "Noodles+Tofu+Edamame", Type: ["meal-prep"], Portions: 4 },
  { Name: "Pasta+CarneDePanela+Cenoura", Type: ["meal-prep"], Portions: 4 },
  { Name: "Onigiri", Type: ["meal-prep"], Portions: 6 },

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
  { Name: "Rice+Beef+Salad", Type: ["lunch", "weekend"], Portions: 1 },
  { Name: "Pork+Potato", Type: ["lunch", "weekend"], Portions: 1 },
  { Name: "[Oven] Chicken+Potato", Type: ["lunch", "weekend"], Portions: 2 },
  { Name: "Wrap('Fake pizza')", Type: ["dinner", "weekend"], Portions: 2 },
  { Name: "Risotto", Type: ["dinner", "weekend"], Portions: 2 },
  { Name: "Onigiri", Type: ["lunch", "weekend"], Portions: 2 },
  { Name: "Sushi", Type: ["lunch", "weekend"], Portions: 2 },
  { Name: "FamilySpinachBaconPie", Type: ["lunch", "weekend"], Portions: 2 },
  { Name: "Polenta+Egg", Type: ["lunch", "weekend"], Portions: 1 },
  { Name: "HomemadePizza", Type: ["weekend"], Portions: 2 },
  {
    Name: "ProsciuttoWrappedChickenRoulade",
    Type: ["lunch", "weekend"],
    Portions: 1,
  },
  {
    Name: "HazelnutPearChicken",
    Type: ["lunch", "dinner", "weekend"],
    Portions: 2,
  },
];

const weekdays: Recipe[] = [
  { Name: "VegetableSoup", Type: ["dinner"], Portions: 2 },
  { Name: "Ravioli+Molho", Type: ["dinner"], Portions: 2 },
  { Name: "Misso+Tofu", Type: ["dinner"], Portions: 2 },
  { Name: "Pasta+RedSauce", Type: ["dinner"], Portions: 1 },
  { Name: "Sandwich", Type: ["dinner"], Portions: 1 },
  { Name: "ImpossibleQuiche", Type: ["dinner"], Portions: 1 },
  { Name: "VegetablePie", Type: ["dinner"], Portions: 2 },
  { Name: "Tapioca", Type: ["dinner"], Portions: 1 },
  { Name: "Hamburger proteico de atum", Type: ["dinner"], Portions: 1 },
  { Name: "Quibe de abobora", Type: ["dinner"], Portions: 1 },
  { Name: "Bao+Fillings", Type: ["dinner"], Portions: 2 },
  { Name: "SmokyBrothyBeans", Type: ["dinner"], Portions: 2 },
  {
    Name: "KumaraEnchilada(Beans+Corn)",
    Type: ["dinner", "weekday"],
    Portions: 2,
  },
  { Name: "Wrap('Fake pizza')", Type: ["dinner", "weekend"], Portions: 2 },
];

const fridays: Recipe[] = [
  { Name: "FrozenPizza", Type: ["friday"], Portions: 1 },
  { Name: "EmpadinhaDeFrango", Type: ["friday"], Portions: 1 },
  { Name: "Takeaway", Type: ["friday"], Portions: 1 },
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
