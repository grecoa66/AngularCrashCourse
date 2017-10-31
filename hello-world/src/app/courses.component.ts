/**
 * Created by akg pc on 10/26/2017.
 */

import { Component } from '@angular/core';

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
  courses = ['course1', 'course2', 'course3'];
}
