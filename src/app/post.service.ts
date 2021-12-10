import { Injectable } from '@angular/core';
import { Post } from './types';
import { POSTS } from './posts';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor() { }

  getAllPosts(): Post[] {
    return POSTS;
  }

  getPost(id: number): Post | undefined {
    return POSTS.find(item => id === item.id);
  }
}