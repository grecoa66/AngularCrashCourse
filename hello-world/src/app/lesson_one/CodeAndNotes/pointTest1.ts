/**
 * Created by akg pc on 10/23/2017.
 */

/**
 * Classes:
 * Put all functionality that needs to be grouped together in a class.
 */
export class Point1 {
  // you can use access modifiers
  // you can put all this in the contructor
  // private y: number;
  // private x: number;

  // ? makes the paramter optional
  constructor(private _x?:number, private _y?:number){

  }

  draw(){
    console.log('X:' + this._x + ', Y:' + this._y);
  }
  getDistance(another: Point1){
    // ...
  }

  //You can use keyword get/set to give classes property modifers
  get x() {
    return this._x;
  }

  set x(value){
    if (value > 0)
      throw new Error('value must be greater than 0');

    this._x = value;
  }

  get y(){
    return this._y;
  }

  set y(value){
    if (value < 0){
      throw new Error('value must be greater than 0');
    }
  }

}

// let pointA = new Point1(5, 7);
// let x = pointA.x;
// pointA.x = 3;
// pointA.draw();
