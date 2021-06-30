import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'
})
export class ListadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes : string[] = ['Superman', 'Spiderman', 'Ironman', 'Green Lantern', 'Hulk'];
  heroesBorrado: string = '';

  borrarHeroe(): void {
    this.heroesBorrado = this.heroes.shift() || '';
  }

}
