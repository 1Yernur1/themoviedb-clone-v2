import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from 'src/app/shared/config';

@Injectable({
  providedIn: 'root',
})
export class TrailerService {
  private url: string = apiConfig.url;
  private apiKey: string = apiConfig.key;

  constructor(private httpClient: HttpClient) {}

  get upcomingMovies() {
    return this.httpClient.get(
      `${this.url}/movie/upcoming?api_key=${apiConfig.key}`
    );
  }
}
