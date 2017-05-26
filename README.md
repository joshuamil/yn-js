# yn-js

`yn-js` replaces boolean values (e.g.: yes/no, true/false, 1/0, etc.) with user-specified strings (e.g.: 'Yes/No', 'On/Off', 'A/B').

## Install

```
$ npm install yn-js
```


## Usage

```js
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

```

## Options

`yn-js` accepts the following parameters.

### input (Boolean = '')
The string value you wish to obfuscate or mask from the viewer.

### separator (Array = ['True', 'False'])
An array of values you wish to display for "truthy" and "falsy" statements in that order. Truthy statements include one of: `true`, `1`, `'1'`, `'yes'`, `'on'`, `'true'`

## license

ISC
