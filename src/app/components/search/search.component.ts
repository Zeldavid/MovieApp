import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculas: any[] = [];
  res: string;
  response = true;
  infoResponse = false;
  error: string;
  infoMovie: any;
  infoMovieRatigs: any[] = [];
  peliculasId: any;

  constructor( private peliculaService: PeliculasService, private router: Router) {
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.peliculaService.getPeliculas(termino)
    .subscribe( (data: any) => {
      this.res = data.Response;
      this.peliculas = data.Search;
      if (data.Response === 'False') {
        this.response = false;
        this.error = data.Error;
      } else {
        this.response = true;
      }
      console.log(this.peliculas);
    },
    error => console.log(error),
    () => {
      console.log(this.res);
      // if ( this.res === 'True' ) {
      //   console.log('id: ', this.peliculas[0].imdbID);
      //   this.peliculaService.getPeliculasById(this.peliculas[0].imdbID)
      //   .subscribe( (resId: any) => {
      //     this.peliculasId = resId;
      //     console.log(resId);
      //   });
      // }
    });
  }

  mouseEnter(el, id) {
    console.log(`esto es ${el} esto es ${id}`);
    this.infoResponse = true;
    this.peliculaService.getPeliculasById(id)
        .subscribe( (resId: any) => {
          this.infoMovie = resId;
          this.infoMovieRatigs = resId.Ratings;
          console.log(this.infoMovie);
          console.log(this.infoMovie.Actors);
        },
        error => console.log(error),
        () => {

        });
  }

  mouseLeave() {
    this.infoResponse = false;
  }

  verInfo(idx) {
    console.log(idx);
    this.peliculaService.getPeliculasById(idx)
        .subscribe( (res: any) => {
          console.log(res.Type);
          if (res.Type === 'series') {
            this.router.navigate( ['/pelicula', idx] );
          }
        },
        error => console.log(error),
        () => {
        });
  }

}
