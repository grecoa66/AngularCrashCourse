import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {UsernameValidators} from "../signup-form/username.validators";
import {PasswordValidators} from "./change-password-validator";

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form : FormGroup;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      oldPassword : ['', Validators.required, PasswordValidators.passwordLookup],
      newPassword :
        [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cannotContainSpace
          ],
          [
            PasswordValidators.passwordHistory
          ]
        ],
      confirmPassword :
        ['', Validators.required ]
    },{
      validator : PasswordValidators.passwordsShouldMatch
    })
  }

  changePassword(){
    console.log('Old password: ' + this.oldPassword.value);
    console.log('New password: ' + this.newPassword.value);
    console.log('Confirm Password: ' + this.confirmPassword.value);
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
}
