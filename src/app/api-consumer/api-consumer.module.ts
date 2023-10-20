import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiListComponent } from './components/api-list/api-list.component';
import { ApiDetailComponent } from './components/api-detail/api-detail.component';



@NgModule({
  declarations: [
    ApiListComponent,
    ApiDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ApiConsumerModule { }
