
// Assignment01
// Level03
// OB, YB 비율 오차범위를 최소한으로 유지하며 코드 작성

import members from './members.js'

const PEOPLE = 4;   // The number of people for each group

const groupGen = () => {
  // Seperate OB and YB from members
  let OB = [];
  let YB = [];
  members.forEach(e => e.group === "OB" ? OB.push(e) : YB.push(e));

  const TOTAL = OB.length + YB.length;
  const GROUP = Math.floor(TOTAL / PEOPLE);   // The number of server part groups

  let shuffled_OB = shuffle(OB);
  let shuffled_YB = shuffle(YB);

  let answer = new Array(GROUP);    // answer: A list of random created groups
  for(let i = 0; i < answer.length; i++) {
    answer[i] = [];   // 2 dimensional array
  }

  for(let i = 0; i < OB.length; i++) {
    answer[i % GROUP].push(shuffled_OB[i]);
    answer[i % GROUP].push(shuffled_YB[i]);
  }

  let index = OB.length;
  while(index < YB.length){
    // ${PEOPLE}명 이하인 group에 우선적으로 할당
    for(let i = 0; i < answer.length; i++) {
      while(answer[i].length < PEOPLE) {
        answer[i].push(shuffled_YB[index++]);
      }
    }
    // 모든 group이 ${PEOPLE}명으로 구성되어 있다면, 첫번재 group부터 한명씩 추가 배정
    for(let i = 0; i < answer.length; i++) {
      answer[i].push(shuffled_YB[index++]);
    }
  }
  return answer;
}

const shuffle = arr => {
  let currIndex = arr.length;
  let randIndex;
  while(currIndex != 0) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    [arr[currIndex], arr[randIndex]] = [arr[randIndex], arr[currIndex]];
  }
  return arr;
}

groupGen();