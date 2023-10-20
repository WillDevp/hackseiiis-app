import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.css']
})
export class PokeApiComponent {
  pokemonData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadPokemonData(1);
  }

  loadPokemonData(page: number): void {
    this.apiService.getApiData('PokeAPI', page).subscribe(data => {
      this.pokemonData = data;
    });
  }
}
