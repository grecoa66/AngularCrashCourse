import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsernameValidators} from "../signup-form/username.validators";
import {PasswordValidators} from "./change-password-validator";

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  // Html form binding
  form = new FormGroup({
    oldPassword : new FormControl('',
      [
        Validators.required
      ],
      [
        PasswordValidators.passwordLookup
      ]
    ),
    newPassword : new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
      [
        PasswordValidators.passwordHistory
      ]
    ),
    newConfirm : new FormControl('',
      [
        Validators.required
      ]
    )
  });

  changePassword(){
    console.log('Old password: ' + this.oldPassword.value);
    console.log('New password: ' + this.newPassword.value)
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }
}
