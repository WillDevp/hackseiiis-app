import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiListComponent } from './components/api-list/api-list.component';
import { ApiDetailComponent } from './components/api-detail/api-detail.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';



@NgModule({
  declarations: [
    ApiListComponent,
    ApiDetailComponent,
    RickAndMortyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RickAndMortyComponent  // Asegúrate de que esté siendo exportado aquí
  ]
})
export class ApiConsumerModule { }
