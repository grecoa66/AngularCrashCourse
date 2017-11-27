import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  star = 'glyphicon glyphicon-star-off';
  isFavorite = false;
  title = '';

  constructor() { }

  ngOnInit() {
  }

  changeStar(){
    this.isFavorite = !this.isFavorite;
  }

}
