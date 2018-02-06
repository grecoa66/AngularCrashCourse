import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any[];



  constructor(private service : PostService) {

  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json() );
      });
  }

  /**
   *
   * @param title
   */
  createPost(input : HTMLInputElement){
    let post = {
      title: input.value
    }
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        input.value = '';
        console.log(response.json());
      });
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post){
    this.service.deletePost(post)
      .subscribe(response => {
        this.posts.splice(this.posts.indexOf(post), 1);
        console.log(response.json());
      });
  }

}
