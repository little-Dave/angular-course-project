import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "it's okay to make a mess", "https://c1.wallpaperflare.com/preview/735/448/1005/food-meal-steak-pork-chop.jpg")
  ];
  
}