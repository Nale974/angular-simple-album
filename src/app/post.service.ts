import { Injectable } from '@angular/core';
import { Post } from './types';
import { POSTS } from './posts';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(
    private http: HttpClient
  ) { }
​
  /*1er lien 
  // URL absolue
  serverUrl = 'https://my-json-server.typicode.com';
  // chemin relatif sur le serveur
  postsPath = '/bhubr/album-api/posts'; */

  /* 2e lien */
  serverUrl = 'https://album-api.benoithubert.me';
  postsPath = '/api/posts';

  getAllPosts(): Promise<Post[]> {
    return this.http
    .get<Post[]>(
      `${this.serverUrl}${this.postsPath}`
    )
    .toPromise();
  }

  getPost(id: number): Promise<Post> /* | undefined */ {
    return this.http
    .get<Post>(
      `${this.serverUrl}${this.postsPath}/${id}`
    )
    .toPromise();
  }

  postPost(title:String, description:String, picture:String):Promise<Post>{
    return this.http
    .post<Post>(
      `${this.serverUrl}${this.postsPath}`,
      {title,description,picture}
    )
    .toPromise();
  }
}