import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from '../app-routing.module';
import { ColombiaApiComponent } from './components/colombia-api/colombia-api.component';
import { PokeApiComponent } from './components/poke-api/poke-api.component';



@NgModule({
  declarations: [
    RickAndMortyComponent,
    LandingComponent,
    ColombiaApiComponent,
    PokeApiComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    RickAndMortyComponent  // Asegúrate de que esté siendo exportado aquí
  ]
})
export class ApiConsumerModule { }
