import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";
import {AppError} from "./app.error";
import {NotFoundError} from "./not-found-error";
import {BadInputError} from "./bad-input-error";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any[];

  /**
   * Set up all needed imports
   * @param service - service from all crub ops on post objects
   */
  constructor(private service : PostService) {
  }

  /**
   * Get the list of posts from the server when
   * this class is initialized
   */
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json() );
      }, (error) => {

        if(error.status === 404)
          alert('There were no posts to get!');
        else
          alert('An unexpected error has occured');
          console.log(error);
      });
  }

  /**
   * Create a simple post object with the user's
   * input in the form field. Send that new obj to
   * the posts endpoint
   * @param title - title of the new post
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
      }, (error : AppError) => {
        if(error instanceof BadInputError)
          alert('You can not create that post');
        else
          alert('An unexpected error has occured');
          console.log(error);
      });
  }

  /**
   * This doesn't do anything besides call the put url
   * @param post - the post you want to update
   */
  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, (error: Response) => {
        if(error.status === 404)
          alert('We were unable to update this post');
        else
          alert('An unexpected error has occured');
          console.log(error);
      });
  }

  /**
   * Call endpoint to delete current post from the server
   * and also deletes the post from the local list
   * @param post - post to be deleted
   */
  deletePost(post){
    this.service.deletePost(post)
      .subscribe(response => {
        this.posts.splice(this.posts.indexOf(post), 1);
        console.log(response.json());
      }, (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has already been deleted');
        else
          alert('An unexpected error has occured');
          console.log(error);
      });
  }

}
