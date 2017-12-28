import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite : boolean;

  @Output() change = new EventEmitter();

  star = 'glyphicon glyphicon-star-off';
  @Input() title : string;

  constructor() { }

  ngOnInit() {
  }

  changeStar(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({value: this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs {
  value : boolean
}
