import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals"  selected="selected">All Animals</option>
    <option value="babyAnimals">Baby Animals</option>
    <option value="adultAnimals">Adult Animals</option>
  </select>
  <br><br>
  <div class="well">
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"><b>{{currentAnimal.species}}</b><br>located in the  {{currentAnimal.location}}<br><br><b>Animal Profile</b><br><b>{{currentAnimal.name}}</b> <em>{{currentAnimal.age}} years old, {{currentAnimal.sex}}</em><br>{{currentAnimal.diet}}<br> likes: {{currentAnimal.likes}}<br>dislikes: {{currentAnimal.dislikes}}<br>Number of caretakers: {{currentAnimal.caretakers}}<br><br><button (click)="editButtonClicked(currentAnimal)">edit {{currentAnimal.name}}</button><br><br></li>
    </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
