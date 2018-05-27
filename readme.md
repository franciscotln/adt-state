# adt-state

Function based State algebraic data type for safe code

`npm install adt-state`

## Examples

### Applicative
```js
const pipe = require('adt-state/Helpers/pipe');
const ap = require('adt-state/State/operators/ap');
const runWith = require('adt-state/State/runners/run-with');
const { get, of } = require('adt-state/State/factory/');

// add :: Number -> Number -> Number
const add = x => y => x + y;

// ofAdd :: State s (Number -> Number -> Number)
const ofAdd = of(add);

// getAdd :: State s a
const getAdd = get(add);

const res1 = pipe(
  ap(of(1)),
  ap(of(2)),
  runWith(5)
)(ofAdd);

console.log(res1) // [ Resultant 3, State 5 ]

const res2 = pipe(
  ap(of(1)),
  runWith(5)
)(getAdd);

 console.log(res2); // [ Resultant 6, State 5 ]
```

### Getting State and mapping over the resultant
```js
const pipe = require('adt-state/Helpers/pipe');
const get = require('adt-state/State/factory/get');
const map = require('adt-state/State/operators/map');
const runWith = require('adt-state/State/runners/run-with');

const res = pipe(
  map(x => x * 3),
  runWith(5)
)(get());

console.log(res); // [ Resultant 15, State 5 ]
```