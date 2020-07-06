import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Porkchop Fantasy",
      "The porkchop of your wildest dreams",
      "https://c1.wallpaperflare.com/preview/735/448/1005/food-meal-steak-pork-chop.jpg",
      [
        new Ingredient("Pork chops", 4),
        new Ingredient("Apples", 3),
        new Ingredient("Sweet onion", 1)
      ]
    ),
    new Recipe(
      "Sweet Potato 'Pasta' Bakesplosion",
      "Goodbye, gluten!",
      "https://reciperunner.com/wp-content/uploads/2016/10/Sweet-Potato-Pasta-Bake1.jpg",
      [
        new Ingredient("Sweet potatoes", 2),
        new Ingredient("Spicy Italian turkey sausage", 2),
        new Ingredient("Marinara sauce", 1),
        new Ingredient("Mozarella cheese", 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}