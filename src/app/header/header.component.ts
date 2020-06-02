import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() activateComponent = new EventEmitter<string>();

  setAsActive(componentToDisplay: string) {
    this.activateComponent.emit(componentToDisplay);
  }
} 