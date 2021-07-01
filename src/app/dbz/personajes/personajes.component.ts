import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

  /* Los personajes vendran de un componente padre. */

  get personajes() {
    return this.dbzService.personaje
  }

  constructor( private dbzService : DbzService ) {}

}
