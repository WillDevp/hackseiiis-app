import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-colombia-api',
  templateUrl: './colombia-api.component.html',
})
export class ColombiaApiComponent {
  characters: any[] = [];

  constructor(private apiService: ApiService) {}

  getRickAndMortyData(page: number): void {
    this.apiService.getApiData('Rick-and-Morty', page).subscribe((data) => {

    });
  }
}
