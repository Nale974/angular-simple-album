import { Component, OnInit } from '@angular/core';
import{POSTS} from '../posts';
import{Post} from '../types';
import { PostService } from '../post.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  posts: Post[] = [];

  // l'attribut privé postService va automatiquement
  // référencer l'instance de PostService créée par Angular
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

}
