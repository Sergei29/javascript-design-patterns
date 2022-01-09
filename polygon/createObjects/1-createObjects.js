const functionsStorage = {
  increment: function () {
    this.score++
  },
  login: function () {
    console.log(`You are logged in.`);
  }
}

function createUser(name, score) {
  /**
   * @description Object.create() - this is how the `new` keyword works under the hood.
   */
const newUser = Object.create(functionsStorage)
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const user1 = createUser('John', 1);
user1.login();
user1.increment()
console.log('score: ', user1.score);