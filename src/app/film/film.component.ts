import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input () filmName: string = '';
  @Input () filmOnAir: string = '';
  @Input () filmAffiche: string = '';


  constructor() { }

  ngOnInit()  {
    return this.filmName;
  }

  getOnAir() {
    return this.filmOnAir;
  }

  onWatchFilm() {
    console.log('Lecture du film démarée !');
  }
  
}
