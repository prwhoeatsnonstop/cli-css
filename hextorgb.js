//Write a nodejs command line program that takes a hex color as an argument and returns the rbg CSS value.
// convert hexToRgb
// add a function to the exports object

module.exports.hexToRgb = function (hex){
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}