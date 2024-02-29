
/*
function foo() {
  // the function scope

  let count = 0;
  console.log(count);  // logs 0
}


foo();

console.log(count)   // ReferenceError: count is not defined

// outside of the foo() scope, count is inaccessible

*/





function outerFunc() {
  // the outer scope
  let outerVar = 'I am outside!';

  function innerFunc() {
    // the inner scope

    console.log(outerVar); // => logs "I am outside!"
  }

  innerFunc();
}

outerFunc();



/*
function outerFunc() {
  let outerVar = 'I am outside!';

  function innerFunc() {

    console.log(outerVar); // => logs "I am outside!"
  }

  return innerFunc;

}

const myInnerFunc = outerFunc();
myInnerFunc();  // can i still access outervar ?
*/