/**
 * Created by akg pc on 10/26/2017.
 */

import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
  selector: 'courses',
  template: `
    <h2> {{"Title: " + title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `
})
export class CoursesComponent {

  title = 'List of courses';
  courses;

  // logic for calling an HTTP endpoint
  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }

}
