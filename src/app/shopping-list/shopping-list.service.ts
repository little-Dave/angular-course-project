import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomotoes", 3)
  ];
  
}