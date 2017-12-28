import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appMargin = '20px';

  post = {
    title: 'Custom Input',
    isFavorite : true
  }

  changeFavorite (isFavorite : FavoriteChangedEventArgs) {
    console.log('Favorite Changed:', isFavorite);
  }
} 
