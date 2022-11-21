"use strict";
/*
class ClassName {
  int variable;
  int fn();
};

ClassName::fn() {
  self.variable = 1;
}
*/

function test() {
  let keyName = "age";
  let ClassName = {
    variable: 0,
    name: "the name",
    "two words": "hello there",
    [keyName]: 5,
    // fn: fn,
  };

  // fn() {
  //   self.variable = 1;
  // }

  function makeUser(name, age) {
    return {
      name, // name: name,
      age, // age: age,
    };
  }

  console.log("Hello");
  delete ClassName.variable;

  console.log(ClassName["two words"]);

  let key = "two words";

  delete ClassName[key];

  console.log(ClassName.age);

  let user = makeUser("John", 30);
  console.log(user.name);

  //k is not defined below and declared as var, not let
  // for (k in user) {
  //   console.log(k);
  // }
  for (let j in user) {
    console.log(j);
  }
}

function task1() {
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
}

function isEmpty(obj) {
  for (let num in obj) {
    return true;
  }
  return false;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function task2() {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  console.log(sum);
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    // if (Number(obj[key])) obj[key] *= 2;
    if (typeof obj[key] == "number") obj[key] *= 2;
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function main() {
  // task1();
  // task2();
  multiplyNumeric(menu);
  console.log(menu);
}

main();
