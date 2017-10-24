/**
 * Created by akg pc on 10/15/2017.
 */

enum Color {Red = 0, Blue = 1, Green = 2}

let skyColor = Color.Blue

let sunColor = Color.Red

console.log(skyColor);

//type assertion

let message;

message = 'asdf';

let assertion = (<string> message).endsWith('c');
