
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
  this.score++;
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
user1.increment();
console.log(user1);
