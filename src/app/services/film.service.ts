import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmSubject = new Subject<any[]>();

  constructor() { }

  private films = [
    {
      id: 1,
      title : 'Jurassic Park',
      onAir : false,
      filmAffiche : 'https://upload.wikimedia.org/wikipedia/fr/6/6a/Jurassic_Park_logo.svg'
    },
    {
      id: 2,
      title : 'Star Wars le Réveil de la Force',
      onAir : false,
      filmAffiche : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
      id: 3,
      title : 'Forest Gump',
      onAir : false,
      filmAffiche : 'https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg'
    },
    {
      id: 4,
      title : 'Dune',
      onAir : true,
      filmAffiche : 'https://fr.web.img6.acsta.net/pictures/21/08/10/12/20/4633954.jpg'
    }
  ];

  emitFilmSubject() {
    this.filmSubject.next(this.films.slice());
  }

  setOnAir() {
    for (const film of this.films) {
      film.onAir = true;
    }
    this.emitFilmSubject();
  }
  
  setNoOnAir() {
    for (const film of this.films) {
      film.onAir = false;
    }
    this.emitFilmSubject();
  }

  switchOnAir(index: number) {
    this.films[index].onAir = !this.films[index].onAir;
    this.emitFilmSubject();
  }

  getFilmById(id: number) {
    let tmp;
    for (const film of this.films) {
      if(film.id == id) {
        tmp = film;
      }
    }
    return tmp;
  }
}
