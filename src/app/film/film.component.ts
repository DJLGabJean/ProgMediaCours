import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmName: string = 'Jurrasic Park';
  filmOnAir: string = 'En Blue Ray';
  filmAffiche: string = "https://upload.wikimedia.org/wikipedia/fr/6/6a/Jurassic_Park_logo.svg"

  constructor() { }

  ngOnInit()  {
    return this.filmName;
  }

  getOnAir() {
    return this.filmOnAir;
  }

}
