import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Veggeta',
      poder: 8500,
    },
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 1500,
  }

  agregarNuevoPersonaje( argumento: Personaje ) {
    console.log('Main');
    this.personajes.push(argumento);
  }

/*   cambiarNombre( event: any ) {
    console.log( event.target.value );
  } */

}
