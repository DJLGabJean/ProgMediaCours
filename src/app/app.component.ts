import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Film';

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
}
