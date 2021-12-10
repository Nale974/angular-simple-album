import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  posts = [
    {
      picture: 'https://unsplash.com/photos/JH0wCegJsrQ/download?force=true&w=640',
      title: 'La nuit',
      description: "C'est beau une ville la nuit !",
      likes:0
    },
    {
      picture: 'https://www.cartedelareunion.fr/wp-content/uploads/2017/08/Ile-de-La-Reunion-vue-aerienne-cartedelareunion.fr-%C2%A9-Serge-Gelabert.jpg',
      title: 'La Réunion',
      description: "C'est beau la réunion !",
      likes:0
    },
    {
      picture: 'https://www.cartedelareunion.fr/wp-content/uploads/2017/08/Ile-de-La-Reunion-vue-aerienne-cartedelareunion.fr-%C2%A9-Serge-Gelabert.jpg',
      title: 'La Réunion',
      description: "C'est beau la réunion !",
      likes:0
    },
    {
      picture: 'https://www.cartedelareunion.fr/wp-content/uploads/2017/08/Ile-de-La-Reunion-vue-aerienne-cartedelareunion.fr-%C2%A9-Serge-Gelabert.jpg',
      title: 'La Réunion',
      description: "C'est beau la réunion !",
      likes:0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
