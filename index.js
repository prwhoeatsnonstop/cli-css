console.log("hello");


//Write a nodejs command line program that takes a hex color as an argument and returns the rbg CSS value.
// convert hexToRgb
// function hexToRgb(hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : null;
// }

// console.log(hexToRgb(process.argv[3])); // "51";

//Write a nodejs command line program that put in 3 number values and get out the hex color.
//convert Rgbtohex
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));

//Change the program to take the kind of conversion you want to do.
// if (process.argv[2] === "hex") {
//     console.log(hexToRgb(process.argv[3]))
// } else if (process.argv[2] === "rgb"){
//     let r = parseInt(process.argv[3])
//     let g = parseInt(process.argv[4])
//     let b = parseInt(process.argv[5])

//     let rgb = rgbToHex(r,g,b)
//     console.log(rgb);
// }

// var my = require('./hextorgb')
// console.log(my);