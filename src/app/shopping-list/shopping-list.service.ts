import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomotoes", 3)
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }

  addItem(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}