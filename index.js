$(document).ready(function(){
console.log("make sure this works!");

// Create a function which will do all of the work to calculate and show the time.

//give you the current date
// var time = new Date();


// let's make a function!
var currentTime = function() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return (hours + ":" + minutes + ":" + seconds);
};

var test = currentTime();

var clockie = $('<h3>' + test + '</h3>');
// console.log(test);

var display = function() {
  $('#clock').html(clockie);
  // console.log(display)

};

var display = function() {
  $('#clock').html(currentTime());
  // console.log(display)

};
var vat = window.setInterval(display, 1000);



 });
