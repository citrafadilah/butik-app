import { Injectable } from '@angular/core';
import { Kategori } from '../models/kategori.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseAPI } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class KategoriService {
  private url: string = environment.api + 'kategori/';

  private subjectKategori = new Subject<Kategori[]>();
  private subjectExexute = new Subject<string>();

  constructor(private http: HttpClient) {}

  exexuteKategoriListener() {
    return this.subjectExexute.asObservable();
  }

  getKategoriListener() {
    return this.subjectKategori.asObservable();
  }

  getKategori() {
    this.http
      .get<{ message: string; kategoris: Kategori[] }>(this.url)
      .subscribe((value) => {
        console.log(value);
        this.subjectKategori.next(value.kategoris);
      });
  }

  addKategori(nama: string) {
    const kategori: Kategori = {
      _id: null,
      nama: nama,
    };

    this.http.post<ResponseAPI>(this.url, kategori).subscribe((response) => {
      this.getKategori();
      this.subjectExexute.next(response.message);
    });
  }

  deleteKategori(kategori: Kategori) {
    this.http
      .delete<{ message: string }>(this.url + kategori._id)
      .subscribe((response) => {
        this.getKategori();
        this.subjectExexute.next(response.message);
      });
  }
}
