import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() isLiked: boolean ;

  @Input() likeCount : number;

  changeHeart(){
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? 1 : -1;
  }

}

export interface LikeChangeEventArgs {
  value : boolean
}
