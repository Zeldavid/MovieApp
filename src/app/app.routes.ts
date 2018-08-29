import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

export const ROUTES: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'pelicula/:id', component: PeliculaComponent},
    {path: '', pathMatch: 'full', redirectTo: 'seacrh'},
    {path: '**', pathMatch: 'full', redirectTo: 'seacrh'}
];
