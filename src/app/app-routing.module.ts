import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './api-consumer/components/rick-and-morty/rick-and-morty.component';
import { LandingComponent } from './api-consumer/components/landing/landing.component';
import { PokeApiComponent } from './api-consumer/components/poke-api/poke-api.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'rick-and-morty', component: RickAndMortyComponent },
  { path: 'poke-api', component: PokeApiComponent },
  { path: 'landing', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
