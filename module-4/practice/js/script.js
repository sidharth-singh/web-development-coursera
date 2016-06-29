// var sum = 0;
// for ( var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum += i;
// }

// console.log(sum);

// //Object Creation
// var company = new Object();
// company.name = "Facebook";
// console.log(company);
// company.ceo = new Object();
// company.ceo.name = "Mark";
// console.log(company);

// //Better Way: Creating Object
// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		fname: "Mark",
// 		favcolor: "Blue"
// 	},
// 	"Stock of Company": 110
// };

// console.log(facebook);

// // Functions : The First Class Datatypes
// // Functions are Objects
// function multiply(x, y) {
// 	return x*y;
// }

// console.log(multiply(3, 5));
// multiply.version = "1.3.5.0";
// console.log(multiply.version);

// // Function Factory
// function makemultiplier(multiplier) {
// 	var myfunc = function (x) {
// 		return multiplier * x;
// 	};

// 	return myfunc;
// }

// var multiplyBy3 = makemultiplier(3);
// console.log(multiplyBy3(10));

// var doubleall = makemultiplier(2);
// console.log(doubleall(34));

// // Passing Functions as arguments
// function dooperationOn(x, operation) {
// 	return operation(x);
// }

// var result = dooperationOn(5, multiplyBy3);
// console.log(result);

// Copying by referance Vs value
// By value
var a = 5;
var b = a; 
console.log("a: " + a);
console.log("b: " + b);
b=7;
console.log("after updating b");
console.log("a: " + a);
console.log("b: " + b);

// By referance
var a = {
	x:3
};
var b = a;
console.log(a);
console.log(b);
b.x=6;
console.log("afterupdate");
console.log(a);
console.log(b);