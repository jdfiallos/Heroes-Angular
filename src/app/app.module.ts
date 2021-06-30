import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './Heroes/heroes.module';


import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contador/contador.module';
import { DBZModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DBZModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
