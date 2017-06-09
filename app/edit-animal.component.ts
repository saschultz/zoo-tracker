import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Edit {{childSelectedAnimal.name}}</h3>
    <label>Name</label><br>
    <input [(ngModel)]="childSelectedAnimal.name">
    <label>Age</label><br>
    <input [(ngModel)]="childSelectedAnimal.age">
    <label>Caretakers</label><br>
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
