console.log(`typeof 1: ${typeof 1}`)
console.log(`typeof str: ${typeof str}`)
console.log(`typeof true: ${typeof true}`)
console.log(`typeof undefined: ${typeof undefined}`)
console.log(`typeof Symbol(): ${typeof Symbol()}`)

// Null은 Primitive type인데 Object type으로 찍힘 => 버그
console.log(`typeof null: ${typeof null}`)


// null => 값이 정해지지 않았으며, 타입은 object
// undefined => 값과 타입이 모두 정해지지 않음
console.log(`null == undefined: ${null == undefined}`)
console.log(`null === undefined: ${null === undefined}`)