$(document).ready(function(){
// Use the Date Library in Javascript to retrieve the current date and time information. Use the different methods that are provided to you for retrieving the individual hour, minute and second information.


// Create a function which will do all of the work to calculate and show the time.

//give you the current date
// var time = new Date();


// let's make a function!

var currentTime = function() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
};

test = currentTime();
console.log(test);
 // Date.prototype.getHours()
// Date.prototype.getMinutes()
// Date.prototype.getSeconds()
