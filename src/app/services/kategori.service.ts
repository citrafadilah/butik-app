import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../interfaces/response-api';
import { environment } from '../../environments/environment';
import { Kategori } from '../models/kategori.model';

@Injectable({
  providedIn: 'root',
})
export class KategoriService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  getKategori(): Observable<Kategori[]> {
    return this.http.get<Kategori[]>(this.apiUrl);
  }
  create(kategori: Kategori): Observable<Kategori> {
    return this.http.post<Kategori>(this.apiUrl, kategori);
  }

}
