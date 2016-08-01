// function add (a, b){
// 	return a+b;
// }
// console.log(add(3,1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));
// var groupA = ['a','b'];
// var groupB = ['c','d'];
// var final = [...groupB,3, ...groupA];

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function gretting(name, age){
	return 'hi '+name+', you are '+age;
};

console.log(gretting(...person));
console.log(gretting(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['trung',...names];
final.forEach(function(name){
	console.log('Hi '+name)
})
