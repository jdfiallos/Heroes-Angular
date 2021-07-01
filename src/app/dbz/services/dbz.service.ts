import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Veggeta',
          poder: 8500,
        },
      ];

      get personaje() {
          /* Con los 3 puntos crea un objeto y pierde la relacion. */
          return [...this._personajes];
      }

    constructor() {
        console.log('Service.');
    }

    agregarPersonaje( personaje: Personaje ) {
      this._personajes.push( personaje );
    }

}