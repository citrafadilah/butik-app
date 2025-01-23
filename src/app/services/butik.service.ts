import { Injectable } from '@angular/core';
import { Butiks } from '../models/butik.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseAPI } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class ButikService {
  //private url: string = 'http://localhost:3000/butik/';
  private url: string = environment.api + 'butik/';

  private subjectButik = new Subject<Butiks[]>();
  private subjectExexute = new Subject<string>();

  constructor(private http: HttpClient) {}

  exexuteButikListener() {
    return this.subjectExexute.asObservable();
  }

  getButikListener() {
    return this.subjectButik.asObservable();
  }

  getButik() {
    this.http
      .get<{ message: string; butiks: Butiks[] }>(this.url)
      .subscribe((value) => {
        console.log(value);
        this.subjectButik.next(value.butiks);
      });
  }

  addButik(nama: string, harga: string, kategoris: string[]) {
    const butik: Butiks = {
      _id: null,
      nama: nama,
      harga: harga,
      kategori: kategoris,
    };

    //console.log(butik);

    this.http.post<ResponseAPI>(this.url, butik).subscribe((response) => {
      this.getButik();
      this.subjectExexute.next(response.message);
      //console.log(response.message)
    });
  }

  deleteButik(butik: Butiks) {
    this.http
      .delete<{ message: string }>(this.url + butik._id)
      .subscribe((response) => {
        //console.log(response.message);
        this.getButik();
        this.subjectExexute.next(response.message);
      });
  }

  updateButik(nama: string, harga: string, kategoris: string[], id: string) {
    const butik: Butiks = {
      _id: id,
      nama: nama,
      harga: harga,
      kategori: kategoris,
    };

    //console.log(butik);

    this.http
      .put<{ message: string }>(this.url + id, butik)
      .subscribe((response) => {
        this.getButik();
        this.subjectExexute.next(response.message);
        //console.log(response.message)
      });
  }
}
