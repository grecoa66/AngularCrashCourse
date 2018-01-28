import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {

  courseCategories = [
    {id:1, name: 'Programming'},
    {id:2, name: 'Theory'},
    {id:3, name: 'Math'},
    {id:4, name: 'Wellness'}
  ]

  submit(f){
    if(f.valid) {
      console.log('Form has been submitted: ', f.value);
    }
  }

  erase(f){
    console.log('No more content');
    f.reset();
  }
}
