import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadosComponent } from './listado/listados.component';

@NgModule({
    /* Componentes, servicios, pipes, etc. */
    declarations: [
        HeroeComponent,
        ListadosComponent
    ],
    exports: [
        ListadosComponent
    ],
    imports: [
        /* Van los modulos */
        CommonModule
    ]
})
export class HeroesModule {}