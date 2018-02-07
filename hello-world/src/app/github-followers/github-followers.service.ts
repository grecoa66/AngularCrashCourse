import { Injectable } from '@angular/core';
import {DataService} from '../common/services/data.service';
import {Http} from "@angular/http";

@Injectable()
export class GithubFollowers extends DataService{

  constructor(http: Http){
    let url = `https://api.github.com/users/grecoa66/followers`;
    super(url, http);
  }

}
