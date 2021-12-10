import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from '../posts';
import { Post } from '../types';
import { PostService } from '../post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post?: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .then(post => {
        this.post = post;
      });
  }

}
