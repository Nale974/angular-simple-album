import { Component, OnInit, Input  } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() post!: Post;

  addLike(){
    this.post.likes +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
