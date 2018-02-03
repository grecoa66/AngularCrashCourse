/**
 * Created by akg pc on 2/3/2018.
 */
import {AbstractControl, ValidationErrors} from "@angular/forms";

export class PasswordValidators {

  static passwordLookup(control: AbstractControl) : Promise<ValidationErrors | null>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== 'password') {
          resolve({matchesPassword : false});
        }else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static passwordHistory(control : AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        switch(control.value){
          case('apples123'):
            resolve({matchesHistory : true});
            break;
          case('breakfast567'):
            resolve({matchesHistory : true});
            break;
          default:
            resolve(null);
        }
      }, 2000);
    });

  }
}
