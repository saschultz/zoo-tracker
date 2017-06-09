import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
  <h2>Add Animal</h2>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <label>Species</label><br>
        <input #newSpecies><br>
      </div>
      <div class="col-sm-6">
        <label>Name</label><br>
        <input #newName><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label>Age</label><br>
        <input #newAge><br>
      </div>
      <div class="col-sm-6">
        <label>Diet</label><br>
        <input #newDiet><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label>Location</label><br>
        <input #newLocation><br>
      </div>
      <div class="col-sm-6">
        <label>Caretakers</label><br>
        <input #newCaretakers><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label>Sex</label><br>
        <input #newSex><br>
      </div>
      <div class="col-sm-6">
        <label>Likes</label><br>
        <input #newLikes><br>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label>Dislikes</label><br>
        <input #newDislikes><br><br>
      </div>
    </div>    
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
