import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable, map, switchMap, of } from 'rxjs';
import { ApiConfig } from '../models/ApiConfig';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apisConfig: any;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.configService.getConfig().subscribe((data) => {
      this.apisConfig = data;
    });
  }
  getApiData(apiName: string, page: number = 1): Observable<any> {
    console.log('Page number:', page);

    return this.configService.getConfig().pipe(
      map((config: ApiConfig) =>
        config.apis.find(
          (api: { name: string; endpoint: string }) => api.name === apiName
        )
      ),

        switchMap(apiConfig => {
          if (apiConfig) {
            const endpoint = `${apiConfig.endpoint}?page=${page}`;
            return this.http.get(endpoint);
          } else {
            return of(null);
          }
        })
    );
  }

  getPokemonDetails(apiName: string, id: number): Observable<any> {

    return this.configService.getConfig().pipe(
      map((config: ApiConfig) =>
        config.apis.find(
          (api: { name: string; endpoint: string }) => api.name === apiName
        )
      ),

        switchMap(pokemonApiConfig => {
          if (pokemonApiConfig) {
            const endpoint = `${pokemonApiConfig.endpoint}/pokemon/${id}`;
            return this.http.get(endpoint);
          } else {
            return of(null);
          }
        })
    );
  }
}
