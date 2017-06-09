import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Edit {{childSelectedAnimal.name}}</h3>
    <label>Name</label>
    <input [(ngModel)]="childSelectedAnimal.name"><br>
    <label>Age</label>
    <input [(ngModel)]="childSelectedAnimal.age"><br>
    <label>Caretakers</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
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
