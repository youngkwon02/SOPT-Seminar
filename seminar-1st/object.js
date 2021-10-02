const person = new Object();

person.name = "영권";
person.part = "Server";
person['group'] = "YB";
person.sayHello = function() {
  console.log(`안녕하세요, ${this.name} 입니다.`);
};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("===============")

const emptyObject = {};
console.log(typeof emptyObject);


// 객체의 함수를 작성할 때, this object에 접근을 위해 함수 선언식으로 함수를 정의하는 것이 Better way
const animal = {
  animalType: "Cat",
  animalName: "삐용이",
  animalFriends: ["달곰", "영권", "명준"],
  meow: function() {
    console.log(`${this.animalName}: 삐용 ~`);
  },
  thisFriends: function() {
    this.animalFriends.forEach(friend => {
      console.log(`${this.animalName}의 친구: ${friend}`);
    });
  },
};

console.log(animal);
animal.meow();
animal.thisFriends();