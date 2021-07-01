import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
/* import { DbzService } from '../services/dbz.service'; */

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 1500,
  }

/*   get personajes(): Personaje[] {
    return this.dbzService.personajes
  } */

/*   agregarNuevoPersonaje( argumento: Personaje ) {
    console.log('Main');
    El argumento sera lo emitido por el evento.
  } */

/*   cambiarNombre( event: any ) {
    console.log( event.target.value );
  } */

  constructor( /* private dbzService: DbzService */ ) {
  }

}