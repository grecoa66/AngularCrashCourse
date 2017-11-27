import { Pipe, PipeTransform } from '@angular/core';
import _  from 'lodash';
@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  prepositions = ['the','by', 'of', 'for', 'at', 'off', 'on', 'with'];
  transform(value: string): any {

    if(!value){
      return null;
    }

    let result;
    let words = _.split(value, ' ');

    //Capitalize first word no matter what
    words[0] = this.titleCase(words[0]);

    for(let i = 1; i < words.length; i++){
      if(this.prepositions.includes(words[i])){
        words[i] = words[i].toLowerCase();
      }else{
        words[i] = this.titleCase(words[i]);
      }

    }

    return words.join(' ');
  }

  titleCase(word: string){
    let result = '';

    let firstChar = word.charAt(0).toUpperCase();

    let otherChars = word.substr(1).toLowerCase();

    result = firstChar + otherChars;

    return result;
  }


}
