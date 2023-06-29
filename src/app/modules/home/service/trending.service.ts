import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from 'src/app/shared/config';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  private url: string = apiConfig.url;
  private apiKey: string = apiConfig.key;

  constructor(private httpClient: HttpClient) {}

  get dailyTrendingMovies() {
    return this.httpClient.get(
      `${this.url}/trending/movie/day?api_key=${apiConfig.key}`
    );
  }

  get weaklyTrendingMovies() {
    return this.httpClient.get(
      `${this.url}/trending/movie/week?api_key=${apiConfig.key}`
    );
  }
}
