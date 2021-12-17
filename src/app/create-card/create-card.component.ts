import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  newPost: FormGroup  = this.formBuilder.group({
    title: '',
    description: '',
    picture: ''
  });

  constructor( private postService: PostService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const formValue = this.newPost.value;
    console.warn('Submitted');
      this.postService.postPost(formValue['title'], formValue['description'], formValue['picture'])
      this.newPost.reset();
  }

}
