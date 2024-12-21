import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioServiceService {
  private jsonUrl = 'assets/coins.json';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
