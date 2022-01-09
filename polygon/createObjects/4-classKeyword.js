//1. Function object creator
function UserCreator(name, score) {
  this.name = name;
  this.score = score;

};

UserCreator.prototype.increment = function () {
  this.score++;
};

UserCreator.prototype.login = function() {
  console.log('Logged in.');
};

// 2. same by using class
class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment(){
    this.score++
  }

  login(){
    console.log('Logged in.');
  }
}

const user1 = new User('Eva', 9);
user1.increment();
console.log(user1);

