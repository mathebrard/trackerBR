import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  private specificCoinUrl = '/api/v1/cryptocurrency/info';
  private coinPriceUrl = '/api/v1/tools/price-conversion';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.jsonUrl);
  }

  addCoin(): void {}

  getSpecificCoinInfo(symbol: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-CMC_PRO_API_KEY': this.API_KEY,
    });

    const params = new HttpParams().set('symbol', symbol);

    return this.http.get(this.specificCoinUrl, { headers, params });
  }

  getCoinPrice(symbol: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-CMC_PRO_API_KEY': this.API_KEY,
    });

    const params = new HttpParams()
      .set('symbol', symbol)
      .set('amount', 1)
      .set('convert', 'USD');

    return this.http.get(this.coinPriceUrl, { headers, params });
  }
}
