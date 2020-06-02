import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomotoes", 3)
  ];
}