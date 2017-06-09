import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
  <h2>Add Animal</h2>
  <div>
    <label>Animal Species:</label>
    <input #newSpecies>
    <label>Animal Name:</label>
    <input #newName>
    <label>Animal Age:</label>
    <input #newAge>
    <label>Animal Diet:</label>
    <input #newDiet>
    <label>Animal Location:</label>
    <input #newLocation>
    <label>Animal Caretakers:</label>
    <input #newCaretakers>
    <label>Animal Sex:</label>
    <input #newSex>
    <label>Animal Likes:</label>
    <input #newLikes>
    <label>Animal Dislikes:</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Add</button>
  </div>
  `
})

 // newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
