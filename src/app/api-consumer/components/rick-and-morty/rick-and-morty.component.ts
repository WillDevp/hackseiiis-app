import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html'
})
export class RickAndMortyComponent implements OnInit{
  characters: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRickAndMortyData();
  }

  getRickAndMortyData(): void {
    this.apiService.getApiData('Rick-and-Morty')
      .subscribe(data => {
        this.characters = data.results; // Asumiendo que los personajes están en data.results
      });
  }
  
}
