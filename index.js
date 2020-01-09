console.log("hello");


//Write a nodejs command line program that takes a hex color as an argument and returns the rbg CSS value.
// convert hexToRgb
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

console.log(hexToRgb(process.argv[3]));


//Write a nodejs command line program that put in 3 number values and get out the hex color.
//convert Rgbtohex
// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }

// console.log(rgbToHex(0, 51, 255));