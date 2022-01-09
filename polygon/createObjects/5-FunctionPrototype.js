function multiplyBy2(num) {
  return num*2;
}
multiplyBy2.toString(); // where is this method ?

/**
 * multiplyBy2.toString()
 *  
 * | FUNCTION CODE:            |FUNCTION'S LOCAL MEMORY:| 
 * -------------------------------------------------------------------------
 * |                           | multiplyBy2: Function                     |
 * |                           | {                                         |
 * |                           |    prototype:{                            |
 * |                           |                                           |
 * |                           |     __proto__: { ref. Function.prototype },|
 * |                           |    }                                       |
 * |                           | }                                          |
 * 
 * multiplyBy2.prototype - not found
 * Function.prototype = {toString: Function, call:.., apply: ..., bind:.. etc} - FOUND
 * 
 */
 multiplyBy2.score = 9;

 console.log("multiplyBy2.hasOwnProperty('score'): ", multiplyBy2.hasOwnProperty('score'));
 console.log("multiplyBy2.hasOwnProperty('someOther'): ", multiplyBy2.hasOwnProperty('someOther'));

 /**
 * multiplyBy2.thasOwnProperty('score'):
 *  
 * | FUNCTION CODE:            |FUNCTION'S LOCAL MEMORY:| 
 * -------------------------------------------------------------------------
 * |                           | multiplyBy2: Function                     |
 * |                           | {                                         |
 * |                           |    score: 9,                              |
 * |                           |    prototype:{                            |
 * |                           |                                           |
 * |                           |     __proto__: { ref. Function             |
 * |                           |               prototype: {call:.., apply...etc}
 * |                           |               __proto__:{ref. Object.prototype}
 * |                           |              {                             |
 * |                           |    }                                       |
 * |                           | }                                          |
 * 
 * multiplyBy2.prototype - not found, so ref to Function.prototype,
 * Function.prototype = {toString: Function, call:.., apply: ..., bind:.. etc} - not found, so ref to Object.prototype
 * Object.prototype = {..., hasOwnProperty:... } - FOUND
 * 
 */