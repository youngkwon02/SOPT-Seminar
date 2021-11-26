# Project

- **클서합동세미나**
> 트위치, 비드오게임 전용 인터넷 서비스
> 

# API 명세서

[API 명세서 링크]()

# 프로젝트 폴더링

# 코드 컨벤션
### **🖋 네이밍**
**함수 & 변수 & 인스턴스**

- 함수와 변수, 인스턴스에는 **lowCamelCase**를 사용합니다.

### **:memo: 주석**

- `//` 를 단수행의 주석으로 사용합니다.
- `/** ... */` 를 복수행의 주석으로 사용합니다.

### **:herb: 기타**

- 줄의 끝에 반드시 ,(콤마)를 붙입니다. 마지막 요소에도 ,를 붙이는 것에 유의합시다.
- 함수끼리 1줄 개행합니다.
- 중괄호는 아래와 같은 형식으로 사용합니다.

```javascript
if (foo) {
  console.log(foo);
  /*
  ...
  */
}
```

# github 사용법과 전략
### **:speech_balloon: 커밋 메시지 태그 모음**

```
- feat    : 기능 (새로운 기능)
- fix     : 버그 (버그 수정)
- docs    : 문서 (문서 추가, 수정, 삭제)
- chore   : 그 외 변경사항 (주석 추가,삭제 등)
```

### **:small_orange_diamond: 커밋 타입**

- `태그: 설명` 형식으로 커밋 메시지를 작성합니다.
- 태그는 영어를 쓰고 첫 문자는 대문자로 작성합니다.

좋은 예 >

```
  Feat: 검색 api 추가
```

나쁜 예 >

```
  검색 api 추가
```


## **💻 git branch 전략**

**Gitflow Workflow**

- Main과 Develop 브랜치

  메인(main): 메인 브랜치

  개발(develop): 기능들의 통합 브랜치
    - feature 브랜치

- Main에 직접적인 commit, push는 가급적 금지합니다. (X)

- 커밋 메세지는 다른 사람들이 봐도 이해할 수 있게 써주세요.

- 풀리퀘스트를 통해 코드 리뷰를 해봅시다.

- 기능 개발시 → feat/기능 으로 브랜치를 파서 관리합니다.

* 단 feat은 자세한 기능 한 가지를 담당하며, 기능 개발이 완료되면 develop브랜치로 Pull Request를 보냅니다.

```
develop에 바로 merge하지 않습니다.
pr을 develop로 해주세요.
develop에서 완성이 되면 main으로 그때 그때 merge합니다.

merge는 github에서 진행합니다.
```

<img src="https://camo.githubusercontent.com/5af55d4c184cd61dabf0747bbf9ebc83b358eccb/68747470733a2f2f7761632d63646e2e61746c61737369616e2e636f6d2f64616d2f6a63723a62353235396363652d363234352d343966322d623839622d3938373166396565336661342f30332532302832292e7376673f63646e56657273696f6e3d393133" width="80%">

**각자 자신이 맡은 기능 구현에 성공시! 브랜치 다 쓰고 병합하는 방법**

- 브랜치 만듦

```
git branch feature/기능
```

- 브랜치 전환

```
git checkout feature/기능
```

- 브랜치 만듦과 동시에 전환

```
git checkout -b feature/기능
```

- 코드 변경 (현재 **feature/기능** 브랜치)

```
git add .
git commit -m "커밋 메세지" origin feature/기능 브랜치
```

- 푸시 (현재 **feature/기능** 브랜치)

```
git push origin feature/기능 브랜치
```

- feature/기능 브랜치에서 할 일 다 헀으면 pr에서 머지 후 **develop** 브랜치로 전환

```
git checkout develop
```

- 다 쓴 브랜치 삭제 (local) (현재 **develop** 브랜치)

```
git branch -d feature/기능 브랜치
```

- 다 쓴 브랜치 삭제 (remote) (현재 **develop** 브랜치)

```
git push origin :feature/기능 브랜치
```

- develop pull (현재 **develop** 브랜치)

```
git pull origin develop
```
