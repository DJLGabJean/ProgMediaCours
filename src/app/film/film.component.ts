import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input () filmName: string = '';
  @Input () filmOnAir: boolean = false;
  @Input () filmAffiche: string = '';


  constructor() { }

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
  
}
