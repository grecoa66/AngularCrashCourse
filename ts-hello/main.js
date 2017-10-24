/**
 * Created by akg pc on 10/15/2017.
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var skyColor = Color.Blue;
var sunColor = Color.Red;
console.log(skyColor);
