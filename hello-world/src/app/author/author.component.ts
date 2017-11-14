import { Component, OnInit } from '@angular/core';
import {AuthorService} from "./author.service";

@Component({
  selector: 'app-author',
  styleUrls: ['./author.component.css'],
  template: `
    <div id="author-body">
      <h3>{{authorCount + " Authors"}}</h3>
      <ul *ngFor="let author of authors">
        {{author}}
      </ul>
    </div>
  
  `
})
export class AuthorComponent implements OnInit {

  protected authors;
  protected authorCount;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    this.authorCount = this.authors.length;

  }

  ngOnInit() {
  }


}
