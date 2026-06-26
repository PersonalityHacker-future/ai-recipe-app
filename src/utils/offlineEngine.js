import { recipes } from "../data/recipes";

const breakfastTags = ["早餐", "养胃"];
const lunchTags = ["下饭", "硬菜", "经典"];
const dinnerTags = ["下饭", "暖胃", "清淡"];

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function scoreRecipe(recipe, ingredients, avoid, people, cuisine) {
  let score = 0;

  const recipeIngredientNames = recipe.ingredients.map((i) => i.name);

  const matchedIngredients = ingredients.filter((ing) =>
    recipeIngredientNames.some(
      (ri) => ri.includes(ing) || ing.includes(ri)
    )
  );
  score += matchedIngredients.length * 10;

  const hasAvoid = avoid.some((a) =>
    recipeIngredientNames.some(
      (ri) => ri.includes(a) || a.includes(ri)
    ) || recipe.name.includes(a)
  );
  if (hasAvoid) return -1;

  if (recipe.suitablePeople[0] <= people && recipe.suitablePeople[1] >= people) {
    score += 5;
  }

  if (cuisine && cuisine !== "不限" && recipe.cuisine === cuisine) {
    score += 8;
  }

  score += Math.random() * 3;

  return score;
}

function pickRecipes(candidates, count) {
  const sorted = candidates.sort((a, b) => b.score - a.score);
  const topRecipes = sorted.slice(0, Math.min(count + 2, sorted.length));
  return shuffleArray(topRecipes).slice(0, count);
}

export function generateOfflineMenu(ingredients, avoid, people, cuisine) {
  const scoredRecipes = recipes
    .map((recipe) => ({
      ...recipe,
      score: scoreRecipe(recipe, ingredients, avoid, people, cuisine),
    }))
    .filter((r) => r.score >= 0);

  const breakfastCandidates = scoredRecipes.filter((r) =>
    r.tags.some((t) => breakfastTags.includes(t))
  );
  const lunchCandidates = scoredRecipes.filter((r) =>
    r.tags.some((t) => lunchTags.includes(t)) ||
    (!r.tags.some((t) => breakfastTags.includes(t)) && r.difficulty !== "简单" && !r.tags.includes("凉菜"))
  );
  const dinnerCandidates = scoredRecipes.filter((r) =>
    r.tags.some((t) => dinnerTags.includes(t)) ||
    (!r.tags.some((t) => breakfastTags.includes(t)))
  );

  const breakfastCount = people <= 2 ? 1 : 2;
  const lunchCount = people <= 2 ? 2 : 3;
  const dinnerCount = people <= 2 ? 2 : 3;

  const breakfast = breakfastCandidates.length > 0
    ? pickRecipes(breakfastCandidates, breakfastCount)
    : pickRecipes(scoredRecipes, breakfastCount);

  const lunch = lunchCandidates.length > 0
    ? pickRecipes(lunchCandidates, lunchCount)
    : pickRecipes(scoredRecipes, lunchCount);

  const dinner = dinnerCandidates.length > 0
    ? pickRecipes(dinnerCandidates, dinnerCount)
    : pickRecipes(scoredRecipes, dinnerCount);

  return {
    breakfast,
    lunch,
    dinner,
  };
}

export function buildShoppingList(menu, existingIngredients) {
  const allIngredients = [];

  const allRecipes = [
    ...menu.breakfast,
    ...menu.lunch,
    ...menu.dinner,
  ];

  allRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ing) => {
      const existing = allIngredients.find((i) => i.name === ing.name);
      if (existing) {
        // Already listed
      } else {
        allIngredients.push({
          name: ing.name,
          amount: ing.amount,
          unit: ing.unit,
          pricePerUnit: ing.pricePerUnit,
          needBuy: !existingIngredients.some(
            (ei) => ing.name.includes(ei) || ei.includes(ing.name)
          ),
        });
      }
    });
  });

  return allIngredients;
}
