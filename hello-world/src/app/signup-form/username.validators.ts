import {AbstractControl, ValidationErrors} from "@angular/forms";

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0){
      return {
        cannotContainSpace : true
      }
    }
    return null;
  }

  /**
   * This is an async validator. It takes an abstract control as a param.
   * It's return type is a promise that returns a validator error or null.
   * The promise is envoked using new and gets it's two callback functions as
   * params. If the function is successful you call resolve with the data you
   * want to send back to the caller and reject if there was an error.
   * @param control
   * @returns {Promise<T>}
   */
  static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(control.value === 'grecks'){
          resolve( { shouldBeUnique: true} );
        }else{
          resolve(null);
        }
      }, 2000);
    });
  }

}
