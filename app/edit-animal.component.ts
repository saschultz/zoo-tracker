import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <div class="row">
      <hr>
      <h3>Edit {{childSelectedAnimal.name}}</h3>
      <div class="col-sm-4">
        <label>Name</label>
        <input [(ngModel)]="childSelectedAnimal.name"><br>
      </div>
      <div class="col-sm-4">
        <label>Age</label>
        <input [(ngModel)]="childSelectedAnimal.age"><br>
      </div>
      <div class="col-sm-4">
        <label>Caretakers</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <br>
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
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
