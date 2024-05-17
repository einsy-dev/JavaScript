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

// ---Promise all ---
var promiseAll = function (functions) {
	return new Promise((resolve, reject) => {
		var l = []
		var count = 0
		for (var key in functions) {
			(function (key) {
				functions[key]().then(res => {
					l[key] = res;
					count++;
					if (count === functions.length) {
						resolve(l)
					}
				}).catch(rej => { reject(rej) })
			})(key)
		}
	})
};
// ---Promise all---

// ---Function generator---
function* indexGenerator() {
	let index = 0;
	while (true) {
		yield index++;
	}
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
// ---Function generator---

// ---Map---
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'

alert(map.size); // 3
// ---Map---

// ---Set---
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
	alert(user.name); // John (then Pete and Mary)
}
// ---Set---
