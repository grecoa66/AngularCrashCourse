/**
 * Created by akg pc on 10/23/2017.
 */
export class Like{

  constructor(private _count:number){
    // ...
  }

  get count(){
    return this._count;
  }
  set count(value:number){
    if(value < 0){
      throw new Error('The like count must be greater than zero');
    }
  }

  incrementLike(){
    this._count++;
  }

  decrementLike(){
    this._count--;
  }
}
