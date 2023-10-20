import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html'
})
export class RickAndMortyComponent implements OnInit{
  rickAndMortyData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRickAndMortyData();
  }
  getRickAndMortyData() {
    this.apiService.getApiData('Rick and Morty').subscribe(data => {
      this.rickAndMortyData = data;
      console.log(this.rickAndMortyData);
  });
  }
}
