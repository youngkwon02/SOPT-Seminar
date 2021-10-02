const num1 = 1;
const num2 = 2;
const str = "2";
const bool = true;

console.log(`num1 == bool: ${num1 == bool}`);
console.log(`num2 == bool: ${num2 == bool}`);


// Truthy: 대충 True
console.log(Boolean(10))
console.log(Boolean(-41))
console.log(Boolean('문자'))
console.log(Boolean(true))
console.log(Boolean([]))
console.log(Boolean({}))


// Falsy: 대충 False
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(false))
console.log(Boolean(''))
