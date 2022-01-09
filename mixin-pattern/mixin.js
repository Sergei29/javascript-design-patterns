
/**
 * @description The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class.
 */
const sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

const danceMixin = {
  stepLeft(){
    console.log(`${this.name} - one step to the left`);
  },
  stepRight(){
    console.log(`${this.name} - one step to the right`);
  },
  spinAround(){
    console.log(`${this.name} - spin around!`);
  }
}

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);
Object.assign(User.prototype, danceMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

const Serge = new User('Serge');
Serge.sayHi();
Serge.stepLeft();
Serge.stepRight();
Serge.spinAround();
Serge.sayBye();