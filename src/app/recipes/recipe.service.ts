import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Porkchop Fantasy", "The porkchop of your wildest dreams", "https://c1.wallpaperflare.com/preview/735/448/1005/food-meal-steak-pork-chop.jpg")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}