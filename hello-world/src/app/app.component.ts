import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";
import {LikeChangeEventArgs} from "./like/like.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appMargin = '20px';

  heartColor = 'deeppink';

  post = {
    title: 'Custom Input',
    isFavorite : true,
    isLiked : true
  }

  tweet = {
    body: 'Twitter is a thing that people do.',
    isLiked : false,
    likeCount: 0
  }

  contentObj = {
    color_red : 'red',
    color_green : 'green'
  };

  changeLike(isLiked :  LikeChangeEventArgs){
    console.log('Like Changed: ', isLiked);
  }

  changeFavorite (isFavorite : FavoriteChangedEventArgs) {

    console.log('Favorite Changed:', isFavorite);
  }
}
