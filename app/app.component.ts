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
      </div>
      <div class="col-sm-6" id="right-column">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      </div>
    </div>
  </div>
  <hr>
  <footer><img src="../../resources/images/elephant.png" height="60"><img src="../../resources/images/elephant.png" height="40" id="second-elephant"><img src="../../resources/images/elephant.png" height="25" id="third-elephant"><img src="../../resources/images/elephant.png" height="18" id="fourth-elephant"></footer>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the shade", "Toys"),
    new Animal("Red Panda", "Sara", 1, "Herbivore", "Tropical Rain Forest Building", 4, "Female", "Eating bamboo", "People"),
    new Animal("Zebra", "Kevin", 12, "Herbivore", "Grassland Building", 3, "Male", "People", "Eating bamboo"),
    new Animal("Penguin", "Lionel", 2, "Carnivore", "Arctic Building", 1, "Male", "Sliding around", "Falling"),
    new Animal("Penguin", "Lilly", 3, "Carnivore", "Arctic Building", 1, "Female", "Chilling", "Falling")
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
