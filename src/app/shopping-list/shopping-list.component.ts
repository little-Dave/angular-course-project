import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers: [ShoppingListService]
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

  // updateList(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient);
  // }
}