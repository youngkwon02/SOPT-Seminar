
// Assignment01
// Level02
// 팀원들의 이름, 사는 곳, 나이, 취미를 출력하는 함수를 포함한 JsonArray 만들기

const group = {
  member: [
    {'name': '김영권', 'station': '부천시청역', 'age': '25', 'hobby': '배드민턴'},
    {'name': '권세훈', 'station': '역곡역', 'age': '23', 'hobby': '서버개발'},
    {'name': '장서현', 'station': '신도림역', 'age': '23', 'hobby': '술먹기'},
    {'name': '이제준', 'station': '개봉역', 'age': '21', 'hobby': '영화보기'}
  ],

  introduce: function() {
    this.member.forEach(e => {
      console.log(`${e.station}에 살고있는 ${e.name}은 나이가 ${e.age}이고 취미는 ${e.hobby}입니다.`);
    });
  }
};

group.introduce()