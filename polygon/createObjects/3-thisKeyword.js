
/**
 * @description each function in JS is a combo Function+Object, so when we want to access Function part we call Name(), but also we can access its Object part just by calling its property by Name.propertyName
 * Name(){ ... // function code }
 * { // Name as Object:
 *  prototype: {}
 * }
 * 
 */
 function UserCreator(name, score) {
  this.name = name;
  this.score = score;

};
/**
 * @description `UserCreator.prototype` property is an object that will keep shared data between all objects taht will be created by `UserCreator`
 */
UserCreator.prototype.increment = function () {
  
  /**
   * @description function declared, and it has `this` aotomatically pointing to a global object ( eg.`window` in browser ), unless it has been declared as a method of a certain object's property, in this case functions's `this` will be pointing to the object holding this method.
   * @returns {any}
   */
  function add1() {
    this.score++;
  }
  // const add1 = () => {
  //   this.score++;
  // }
  add1()
};

UserCreator.prototype.login = function() {
  console.log('Logged in.');
};

/**
 * @description there is a normal function call `UserCreator('Eva', 9)`, that will create a function's new local execution context - which is as usual, HOWEVER, there is also a keyword `new` preceding the fucntion call - that will add a bunch of additional functionality into this execution context:
 * 
 * 1. a special variable `this` that will point to an empty object`{}` initially.
 * 
 * 2. 
 * | FUNCTION CODE:            |FUNCTION'S LOCAL MEMORY:| 
 * -------------------------------------------------------------------------
 * |                           |  name: 'Eva'; score: 9;|
 * | this.name = name = 'Eva'  |  this:{                |
 * | this.score = score = 9    |                        |
 * |                           |   __proto__: {ref. UserCreator.prototype }
 * |                           |                      } |
 * 
 * The auto created `this` object has a hidden ptoperty `__proto__` which is referencing to the Function's Object prototype object `UserCreator.prototype`;
 * 
 * 3. Also `this` object getting properties `this.name` and `this.score` - assigned the arguments values.
 * 
 * 4. all properties or methods that will not be found within `this` own properties like name, score - the next where JS will look for is going to be `UserCreator.prototype` object if it has the property,method in question ( like `increment`, `login`)
 * 
 * 5.And at the end - the `new` keyword will enable the function to implicitly return `this` value, so it can be asigned to `user1`
 */
const user1 = new UserCreator('Eva', 9);

user1.login();
/**
   * @description `UserCreator.prototype.increment` when called by user1, will do the following:
   * 1. user1 will look for own property increment, and will not find it, so will go further to look into `UserCreator.prototype` - here it iwll find it and will invoke, by implicitly passing `this` to reference the value of `user1`;
  * prototype.increment()
  * | FUNCTION CODE:            |FUNCTION'S LOCAL MEMORY:| 
 * -------------------------------------------------------------------------
 * |                            | this: user1; add1: Function|
 * | add1()                     |                        |
 * |  add1 exec context:        |                        |
 * |  ------------------------- |                        |
 * | ||code:    || memory: ||   |                        |
 * |            ||this: global|||                        |
 * |  window.score++ (NaN)
 * |                            |                         |
 * 
 * PROBLEM: what to do, how can we pass `this` to add1 to be referencing the same `user1` object as it does for `prototype.increment` ???
 * 
 * SOLUTION: arrow function 
 * 
 * UserCreator.prototype.increment = function (){ 
 *    add=()=>{this.score++};
 *    add1();
 * };
 * 
 * where add1 `this` will be locked to the `prototype.increment` `this`
   */
user1.increment();
console.log(user1);
