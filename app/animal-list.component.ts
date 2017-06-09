import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList"><b>{{currentAnimal.species}}</b><br>located in the  {{currentAnimal.location}}<br><b>Animal Profile</b><br><b>{{currentAnimal.name}}</b> <em>{{currentAnimal.age}} years old, {{currentAnimal.sex}}</em><br>{{currentAnimal.diet}}<br> likes: {{currentAnimal.likes}}<br>dislikes: {{currentAnimal.dislikes}}<br>Number of caretakers: {{currentAnimal.caretakers}}<br><br></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
