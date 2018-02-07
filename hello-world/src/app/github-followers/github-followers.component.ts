import {Component, OnInit} from '@angular/core';
import {GithubFollowers} from "./github-followers.service";

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit{

  followers : any[];

  constructor(private service : GithubFollowers) { }

  ngOnInit(){
    this.service.getAll()
      .subscribe(response => {
        this.followers = response;
        console.log(this.followers);
      });
  }

  sendUserRequest(value : HTMLInputElement){

  }

}
