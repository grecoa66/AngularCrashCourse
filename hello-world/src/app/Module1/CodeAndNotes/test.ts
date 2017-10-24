/**
 * TypeScript fundamentals.
 * Created by akg pc on 10/15/2017.
 */

/**
 * Declaring variables w/ types
  */

let count: number;
count = 5;

let word: string;
word = 'This is cool';

let anything: any;
anything = 5;
anything = 'Normal js variables';
anything = true;

let numArr: number[] = [1, 2, 3, 4];

let anyArr: any[] = [1, {a: 1, b : 2}, true, ['a', 'b', 'c']];


/**
 * Enums
 */
enum Color {Red = 0, Blue = 1, Green = 2}

let skyColor = Color.Blue;

console.log(skyColor);


/*
 * Type assertion:
 * You can ensure a variable is the type you want.
 */

let message2;

let message = 'asdf';

let endsWithC = (<string> message2).endsWith('c');
let alternativeWay = (message as string).endsWith('c');


/*
 * Arrow function:
 *
 * variable = (parameters) => { functional code }
 */
let doLog = (message3) => {
  console.log(message3);
};

/*
 * interfaces:
 * When you want to make your own type.
 */
// A function with a lot of params
let drawPoint = (x, y, z, a, b, c) => {
  console.log(x, y, z, a, b, c);
};

// you also just have an object
let drawDot = (point) => {
  // ...
};

drawDot({
  x: 1,
  y: 2
});

// have a typed object param
let drawSpec = (point: { x: number, y: number}) => {
  // ...
};

drawSpec({
  x: 1,
  y: 2
});

// use an interface to define the param obj
// Purely for declaration, not functionality.
// interface Point {
//   x: number;
//   y: number;
// }
let drawParticle = (point: Point) => {
  // ...
};

// drawParticle({
//   x: 1,
//   y: 2
// });
