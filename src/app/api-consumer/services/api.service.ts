import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apisConfig: any;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.configService.getConfig().subscribe((data) => {
      this.apisConfig = data;
    });
   }
   getApiData(apiName: string): Observable<any>{
    const apiConfig = this.apisConfig.find((api: any) => api.name === apiName);
    return this.http.get(apiConfig.endPoint);
   }
}
