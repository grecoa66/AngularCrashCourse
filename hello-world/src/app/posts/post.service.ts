import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs";
import {AppError} from "./app.error";
import {NotFoundError} from "./not-found-error";
import {BadInputError} from "./bad-input-error";

@Injectable()
export class PostService {

  url : string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) { }

  getPosts(){
    return this.http.get(this.url)
      .catch((error: Response) => {
        if(error.status === 404)
          return null ;//Observable.throw(new BadInputError());

        return Observable.throw(new AppError(error));
      });
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post){
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(post){
    return this.http.delete(this.url + '/' + post.id)
      .catch((error: Response) => {
        if(error.status === 404)
          return null; //Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
      });
  }

}
