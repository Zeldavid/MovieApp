import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  mov: any = {  };
  seasons: any[] = [];

  constructor(private peliculaService: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.peliculaService.getPeliculasById(params['id'])
        .subscribe( (resId: any) => {
          this.mov = resId;
          this.seasons.length = resId.totalSeasons;
          console.log(this.mov);
        },
        error => console.log(error),
        () => {
        });
    });
  }

  ngOnInit() {
  }

}
