1.

number;
string;
boolean;
array;
object;
number;
variable;


2.
true;
true;
true;
false;
false;
false;
false;
false;

3.

var myNumber = 2;
var mystring = “Julia”;
var myBoolean =“true’;
var myObject {eat: "yes"}; 

4.
 1+1 ===2 ? “hello” : “bye”;

5.
var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var first = animals[0];
// 5.2. Assign the last element to a variable
var last = animals.pop();
// 5.3. Assign the length of an array to a variable
var length = animals.length; 
//5.4. Add an item to the end of the array

animals.push(“dog”);

5.5. Add an item to the start of the array
animals.unshift(“cat”)

5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf(“hedgehog”);

var veg = [‘carrot’, ‘zucchini’, ‘spinach’, ‘tomato’, ‘corn’];

var i = 0;
var y =veg.length-1
while(x<y){
   console.log(veg[i]);
   x++;}


var vegs = [‘carrot’, ‘zucchini’, ‘spinach’, ‘tomato’, ‘corn’];


for (var i =0; i< veg.length; i++){
  console.log(veg[i]);
}


for (var veg of vegs)
{
  console.log(veg);
}