import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
}
