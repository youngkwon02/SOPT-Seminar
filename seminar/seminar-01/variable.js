// 변수 선언법

// var: 재선언, 재할당 가능 + Function scope - (Hoisting 같은건가?)
var variableVar = "123";
var variableVar = "321";

console.log(`variableVar: ${variableVar}`);


// let: 재선언 불가, 재할당 가능 + Block scope
let variableLet = "123";
// let variableLet = "321";

console.log(`variableVar: ${variableVar}`);


// const: 재선언 불가, 재할당 불가 + Block scope
const variableConst = "123";
// const variableConst = "321";

console.log(`variableConst: ${variableConst}`);
