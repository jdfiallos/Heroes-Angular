import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000,
  }

  agregar() {
    /* Tomar el evento para no ejecutar el evento, si no */
    console.log(this.nuevo);
  }

/*   cambiarNombre( event: any ) {
    console.log( event.target.value );
  } */

}
