import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList() {
    this.shoppingListService.addRecipeItems(this.recipe.ingredients);
  }
}

// utilized ShoppingListService directly, here. Could instead have created a method in 
// RecipesService, which would be called here, injected ShoppingListService there 
// and called its addRecipeItems method from there