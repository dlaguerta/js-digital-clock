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
// console.log(test);

var clockie = $('<h3>' + test + '</h3>');
console.log(test);

// var intervalID = window.setInterval(clockie, 10);

// $('#clock').html(clockie);

$('#clock').html(clockie);

 });


var display = function() {
  var test = currentTime();
  // console.log(test);

  var clockie = $('<h3>' + test + '</h3>');

  return clockie;

};
