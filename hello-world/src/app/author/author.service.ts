import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class AuthorService {
  public authors;
  constructor() {
    this.authors = ['Mark Twain', 'William Shakespeare', 'Ernest Hemingway'];
  }

  getAuthors(){
    let self = this;
    return self.authors;
  }

  getNumberOfAuthors(){
    let self = this;
    return self.authors.length;
  }

}
