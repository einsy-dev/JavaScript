// ---constructor function---
// coud be with name, 
// to use like name.info 
// instead of this.info 
// and not be accessible from outside
var invokeFunc = function () {
	this.info = 'Hello World'; //field
	this.sayBye = function () { //method
		return "Bye World";
	}
	this.toString = function () {
		return this.info;
	}
};
const obj = new invokeFunc();
// ---constructor function---
const obj2 = function () {
	return {
		info: 'Hello World',
		sayBye: function () {
			return "Bye World";
		},
		toString: function () {
			return this.info;
		}
	}
}
console.log(obj2().sayBye());
// ---constructor function---

// ---Named Function Expression---
let sayHi = function func(who) {
	if (who) {
		console.log(`Hello, ${who}`);
	} else {
		func("Guest"); // использует func, чтобы снова вызвать себя же
	}
};
sayHi(); // Hello, Guest
// ---Named Function Expression---

// ---new Function syntax---
console.log(new Function('a', 'b', 'return a + b')(1, 2));
console.log(new Function('a,b', 'return a + b')(1, 2));
console.log(new Function('a , b', 'return a + b')(1, 2));
// ---new Function syntax---

//---Closures---
function sayHi(name) {
	return function (surname) {
		console.log(`Hello, ${name} ${surname}`);
	};
}
sayHi('John')('Doe');
// or
sayHiJohn = sayHi('John');
sayHiJohn('Doe');
//---Closures---


//---Currying---
function curry(f) { // curry(f) выполняет каррирование
	return function (a) {
		return function (b) {
			return f(a, b);
		};
	};
}
const newCurry = curry((a, b) => a + b); // function to transform
console.log(newCurry(1)(2)); // 3
//---Currying---
function curry2(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			}
		}
	};
}
const newCurry2 = curry2((a, b, c, n) => a + b + c + n); // function to transform
console.log(newCurry2(1)(2)(3)(4)); // 3
//---Currying---

// ---Refference type---
let objRef, method;
objRef = {
	name: 'John',
	go: function () { console.log(this.name); return this; }
};
objRef.go();               // (1) [object Object]
(objRef.go)();             // (2) [object Object]
// (method = objRef.go)();    // (3) undefined
// (objRef.go || objRef.stop)(); // (4) undefined
const binded = objRef.go.bind({ name: 'Doe' });
console.log(binded());
// ---Refference type---