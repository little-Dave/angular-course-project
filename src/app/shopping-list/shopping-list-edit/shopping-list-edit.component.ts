import { Component, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
  @ViewChild("nameInput", {static: false}) nameInput: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInput: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    this.shoppingListService.addItem(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }

}