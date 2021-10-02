

const addStr = function(x, y) {
  return x + y ;
}
console.log(addStr("안녕", "하세요"));

const add = (x, y) => x + y;

const square = x => x * x;

// 객체를 One-Line에서 return 할 때는, 소괄호로 감싸줘야 함
const person = (name, age) => ({ name: name, age: age });
