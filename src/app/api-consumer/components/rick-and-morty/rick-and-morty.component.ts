import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
})
export class RickAndMortyComponent implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getRickAndMortyData(this.currentPage);
  }

  getRickAndMortyData(page: number): void {
    this.apiService.getApiData('Rick-and-Morty', page).subscribe((data) => {
      this.characters = data.results;
      this.currentPage = page;
      this.totalPages = data.pages;
      this.cd.detectChanges();  // Agrega esta línea
    });
  }
  nextPage(): void {
    console.log('Current Page before next:', this.currentPage);
    if (this.currentPage < this.totalPages) {
      this.loadCharacters(this.currentPage + 1);
    }
  }
  
  prevPage(): void {
    console.log('Current Page before prev:', this.currentPage);
    if (this.currentPage > 1) {
      this.loadCharacters(this.currentPage - 1);
    }
  }
  
  loadCharacters(page: number): void {
    console.log('Loading characters for page:', page);
    this.getRickAndMortyData(page);
  }
  
}
