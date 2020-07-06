import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomotoes", 3)
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }

  emitUpdate() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addItem(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.emitUpdate();
  }

  addRecipeItems(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitUpdate();
  }

}