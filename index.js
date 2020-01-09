console.log("hello");


//Write a nodejs command line program that takes a hex color as an argument and returns the rbg CSS value.
// convert hexToRgb
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

// console.log(hexToRgb(process.argv[3]));


//Write a nodejs command line program that put in 3 number values and get out the hex color.
//convert Rgbtohex
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// console.log(rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));

//Change the program to take the kind of conversion you want to do.
if (process.argv[2] === "hex") {
    console.log(hexToRgb(process.argv[3]))
} else if (process.argv[2] === "rgb"){
    let r = parseInt(process.argv[3])
    let g = parseInt(process.argv[4])
    let b = parseInt(process.argv[5])

    let rgb = rgbToHex(r,g,b)
    console.log(rgb);
}