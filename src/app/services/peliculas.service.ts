import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Jsonp, Http } from '@angular/http';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas: any[] = [];

  constructor(private http: HttpClient) {
    console.log('servicio listo');
  }

  getPeliculas( termino: string ) {
    return this.http.get(`http://www.omdbapi.com/?s=${termino}&apikey=1ae5c7f6`);
  }


  getPeliculasById( id: string ) {
    // this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=1ae5c7f6')
    // .subscribe((data: any) => {
    //   this.peliculas = data;
    //   console.log(this.peliculas);
    // });
    return this.http.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=1ae5c7f6`);
  }
}
