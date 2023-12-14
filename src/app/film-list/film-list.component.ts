import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit, OnDestroy{
  films: any = [];
  filmSubscription: Subscription | undefined;

  constructor(
    private Film: FilmService
  ){}

  ngOnInit(): void {
    this.filmSubscription = this.Film.filmSubject.subscribe((listFilm) => {
      this.films = listFilm;
    });
    this.Film.emitFilmSubject();
  }

  onAirAll() {
    this.Film.setOnAir();
  }

  noOnAirAll() {
    this.Film.setNoOnAir();
  }

  ngOnDestroy(): void {
    this.filmSubscription?.unsubscribe();
  }
}

