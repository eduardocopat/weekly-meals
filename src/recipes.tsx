interface Recipe {
  Name: string;
  Type: "dinner" | "lunch" | "meal-prep";
  Leftovers: number;
}

const recipes: Recipe[] = [
  { Name: "Rice+Chicken+Carrots", Type: "meal-prep", Leftovers: 6 },
  { Name: "Rice+Mince+Carrots", Type: "meal-prep", Leftovers: 6 },
  { Name: "Pasta+RedSauce+Corn", Type: "meal-prep", Leftovers: 4 },
  { Name: "Noodles+Tofu+Edamame", Type: "meal-prep", Leftovers: 4 },
];

export default recipes;
