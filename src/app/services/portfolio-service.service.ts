import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../models/coins';

@Injectable({
  providedIn: 'root',
})
export class PortfolioServiceService {
  private jsonUrl = './assets/coins.json';
  private apiUrl = '/api/v1/cryptocurrency/listings/latest'; // Exemple d'endpoint
  private API_KEY = '7c9202a9-f1b3-41e9-8c01-e578763a586e';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.jsonUrl);
  }

  addCoin(): void {}

  getCoinsAPI(): Observable<any> {
    const headers = new HttpHeaders({
      'X-CMC_PRO_API_KEY': this.API_KEY, // Ajouter la clé API dans le header
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
