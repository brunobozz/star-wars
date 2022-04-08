import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServSwapiApiService {
  private API_PREFIX = environment.apiSwapi;

  constructor(private http: HttpClient) {}

  public getData(value: string) {
    return this.http.get(this.API_PREFIX + value);
  }

  public getUrl(value: string) {
    return this.http.get(value);
  }
}
