import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  films = [
    {
      title : 'Jurassic Park',
      onAir : false,
      filmAffiche : 'https://upload.wikimedia.org/wikipedia/fr/6/6a/Jurassic_Park_logo.svg'
    },
    {
      title : 'Star Wars le Réveil de la Force',
      onAir : false,
      filmAffiche : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
      title : 'Forest Gump',
      onAir : false,
      filmAffiche : 'https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg'
    },
    {
      title : 'Dune',
      onAir : true,
      filmAffiche : 'https://fr.web.img6.acsta.net/pictures/21/08/10/12/20/4633954.jpg'
    }
  ];

  setOnAir() {
    for (const film of this.films) {
      film.onAir = true;
    }
  }

  setNoOnAir() {
    for (const film of this.films) {
      film.onAir = false;
      console.log(film);
    }
  }

  switchOnAir(index: number) {
    this.films[index].onAir = !this.films[index].onAir;
  }
}
