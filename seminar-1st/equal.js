const numberVar = 1;
const stringVar = '1';

// ==
// 동등 연산자: 값만 비교
console.log(`NumberVar == StringVar: ${numberVar == stringVar}`)

// ===
// 일치 연산자: 값과 타입 모두 비교
console.log(`NumberVar === StringVar: ${numberVar === stringVar}`)

// Type casting
const num = 2;
const str = '2';
console.log(`num + str = ${num + str} and the type is ${typeof(num + str)}`)