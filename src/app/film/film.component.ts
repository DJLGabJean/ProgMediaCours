import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input () filmName: string = '';
  @Input () filmOnAir: boolean = false;
  @Input () filmAffiche: string = '';
  @Input () index: number = 0;


  constructor( 
    private Film : FilmService
  ) { }

  ngOnInit():  void {
  }

  getOnAir() {
    return this.filmOnAir;
  }

  onWatchFilm() {
    console.log('Lecture du film démarée !');
  }

  changeColor() {
    return this.filmOnAir ? 'purple' : 'red';
  }

  onSwitch() {
    this.Film.switchOnAir(this.index);
  }
}
