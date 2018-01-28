import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Home Phone'},
    {id: 3, name: 'Cell Phone'},
    {id: 4, name: 'Work Phone'}

  ]

  submit(f) {
    console.log(f.value);

  }
}
