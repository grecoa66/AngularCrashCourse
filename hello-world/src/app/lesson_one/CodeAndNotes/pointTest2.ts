/**
 * Created by akg pc on 10/23/2017.
 */
import {Point1} from './pointTest1';

class Point2{

  constructor(private _x:number, private _y:number){

  }

  draw(){
    console.log('X:' + this._x + ', Y:' + this._y);
  }

}

let point1 = new Point1(2, 5);
