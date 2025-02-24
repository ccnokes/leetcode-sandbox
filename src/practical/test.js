// @ts-check
import test from 'ava';
import './implementFunctionCall.js';

test('Function.prototype.myCall', t => {
  function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
  }
  
  const mary = {
    age: 21,
  };
  
  const john = {
    age: 42,
  };
  t.is(multiplyAge.myCall(mary), 21);
  t.is(multiplyAge.myCall(john, 2), 84);
});