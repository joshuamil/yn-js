const yn = require('./yn-js');
let str = ['Yes', 'No'];

// Returns 'True'
let a = yn(true);
console.log(a);

// Returns 'No'
let b = yn(false, str);
console.log(b);

// Returns 'B'
let c = yn(false, ['A', 'B']);
console.log(c);

// Returns 'Bad'
let d = yn('0', ['Good', 'Bad']);
console.log(d);

// Returns 'Good'
let e = yn('1', ['Good', 'Bad']);
console.log(e);
