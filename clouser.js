console.log("Working...");

  function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// // Output : This code showing the alert 4 times when we are clicking on ok button 5th time it is closed.

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// //Output : 1,0

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

// // Output : 3

// //Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function Rectangle(length){

   return function innerRectangle(breadth){
        var area = length * breadth;
        console.log(area);
    }
}
let areaofRectangle = Rectangle(6);
areaofRectangle(9);

//Output : 54

//Take a variable in outer function and create an inner function to increase the counter every time it is called

function outer(){
    let counter = 0;
   return function inner(){
        counter=counter+1;
        console.log(counter);
    }
    inner();
}
let one = outer();
one();
one();
one();

//Output : 1
        // 2
        // 3
// "Print Output

var a = 12;
(function () {
 alert(a);
})();

// Output : It is displying popup in that it is showing "this pags says: 12. Because we assigned a value to the a is 12 in local Scope of function

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// Output : It is displying popup in that it is showing "this pags says: 12 Because we assigned a value to the a is 12 in local Scope of function
// Even we declered a as 10 in global scope it prefer local variable first.

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// Output : outerArg = 123
//innerArg = 456
//outerVar = a
//innerVar = b
//globalVar = xyz

































