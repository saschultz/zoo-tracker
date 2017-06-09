import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Zoo Tracker</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h2>Animal List</h2>
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      </div>
      <div class="col-sm-6">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the shade", "Toys")
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
