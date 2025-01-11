import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../interfaces/response-api';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ResponseAPI> {
    return this.http.get<ResponseAPI>(`${this.apiUrl}/categories`);
  }
}
