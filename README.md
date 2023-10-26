# WebProject
### (웹 프로젝트)

HTML5, CSS3, JSES6 를 이용하여
개인 웹 사이트를 만들어 보았습니다.
 
## 목차

Ⅰ) **기술 스택**

Ⅱ) **주요 기능**

Ⅲ) **UI/UX**

Ⅳ) **프로젝트 구현 기술**

Ⅴ) **프로젝트를 마치며 느낀 점**


## Ⅰ) 기술 스택

### 사용 언어

- HTML5
- CSS3
- JSES6


## Ⅱ) 주요 기능

 - header 부분 각 태그들을 누르면 지정해놓은 위치값으로 이동합니다.

 - 첫 화면에서 텍스트가 입력되고 삭제되는 기능을 추가하였습니다.

 - 또한 꾸미는 요소로는 세로로 만든 바를 커서처럼 써서 생동감 있게 넣었습니다.

 - 한 페이지에서 구역을 나누고 자연스럽게 화면이 넘어가는 느낌이 들도록
   background-attachment 의 속성중 fixed 를 사용하였습니다.

 - header에 fixed 속성을 설정해 스크롤바에 영향을 주지 않는 상단 nav바 기능을 추가했습니다.
   스크롤바를 움직일때 약간의 변화를 주기위해 gradient 값을 설정했습니다.

## Ⅲ) UX / UI

![Main](https://github.com/kidchang93/webProject/assets/145524731/b499a2d8-96df-4d8a-b9f3-20259128e3c9)

![About](https://github.com/kidchang93/webProject/assets/145524731/18d42664-3452-47fb-85aa-cfb76768eaf8)

![Feature](https://github.com/kidchang93/webProject/assets/145524731/de4977b9-514e-4b40-8840-51f65009a8d5)

![Background](https://github.com/kidchang93/webProject/assets/145524731/ec4a137f-0cd8-405b-9283-51464a706a88)

![Portfolio](https://github.com/kidchang93/webProject/assets/145524731/7662bee0-0a9d-48f1-8942-0574825862cb)

![Contact](https://github.com/kidchang93/webProject/assets/145524731/8ceb76af-d0a4-4314-99ab-1000cd4d235c)

## Ⅳ) 프로젝트 구현 기술

### CSS3에서 재밌게 구현한 기술

- 마우스 위아래로 움직이는 애니메이션

```css
main button.mouse {
  background-color: transparent; /* 배경 투명 설정 */
  border: none; /* 테두리 없음 */
  color: white; /* 텍스트 컬러 설정 */
  font-size: 2rem; /* 글꼴 크기 설정 */
  position: absolute; /* 절대 위치 설정 */
  bottom: 1rem; /* 아래 여백 설정 */
  left: 50%; /* 가운데 위치로부터 왼쪽 정렬 */
  transform: translateX(-50%); /* X축 이동으로 중앙 정렬 */
  animation: upDown 1s ease-in-out infinite; /* 애니메이션 설정 */
  cursor: pointer; /* 커서를 포인터로 설정 */
}
```

- 마우스 애니메이션 키프레임 설정

```css
@keyframes upDown {
  0% {
    bottom: 1rem; /* 초기 위치 설정 */
  }
  50% {
    bottom: 1.5rem; /* 중간 위치 설정 */
  }
  100% {
    bottom: 1rem; /* 최종 위치 설정 */
  }
}
```

- 메인 타이틀 뒤의 수직선 스타일 설정

```css
main h2 span::after {
  content: ''; /* 가상 요소 내용 없음 */
  height: 40px; /* 세로 크기 설정 */
  width: 3px; /* 가로 크기 설정 */
  background-color: #fff; /* 배경 컬러 설정 */
  display: inline-block; /* 인라인 블록 요소로 설정 */
  animation: blink 0.7s ease-in-out infinite; /* 애니메이션 설정 */
}
```
- 수직선 깜빡임 애니메이션 키프레임 설정

```css
@keyframes blink {
  0% {
    opacity: 1; /* 최대 불투명 설정 */
  }
  100% {
    opacity: 0; /* 완전 투명 설정 */
  }
}
```

- 헤더 fixed 속성을 이용한 nav바의 효과 (앞서 말한 Gradient 사용의 설정)

```css
header.active {
  background-color: rgba(0, 0, 0);
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

### JSES6 에서 재밌게 구현한 기술

- 텍스트 작성과 삭제 즉시 실행 함수

```js
(function () {
  const spanEl = document.querySelector('main h2 span'); // span 태그로 접근
  // 문자열 배열
  const txtArr = [
    'Web Publisher',
    'Front-End Developer',
    'Web UI Designer',
    'UX Designer',
    'Back-End Developer',
  ];
  let index = 0; // index값 초기화
  let currentTxt = txtArr[index].split('');
  // 텍스트 출력되는 함수
  function writeTxt() {
    spanEl.textContent += currentTxt.shift(); // 글자를 한 글자씩 추가
    if (currentTxt.length !== 0) {
      // 만약 currentTxt 배열에 더 남아있는 글자가 있다면
      // 일정 시간 뒤에 writeTxt 함수를 다시 호출
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      // currentTxt 배열에 더 남아있는 글자가 없다면
      // span 요소의 텍스트를 글자 단위로 쪼개서 currentTxt 배열에 저장
      currentTxt = spanEl.textContent.split('');
      // 3초(3000ms) 뒤에 deleteTxt 함수를 호출
      setTimeout(deleteTxt, 3000);
    }
  }
// 텍스트 삭제되는 함수
  function deleteTxt() {
    // currentTxt 배열에서 마지막 글자를 제거
    currentTxt.pop();
    // 현재 배열의 글자들을 문자열로 결합하고 span 요소의 텍스트로 설정
    spanEl.textContent = currentTxt.join('');
    // currentTxt 배열에 더 남은 글자가 있다면
    // 잠시 후에 deleteTxt 함수를 재귀적으로 호출하여 글자를 계속 지움
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      // currentTxt 배열에 더 남은 글자가 없다면
      // 다음 텍스트로 넘어가기 위해 index 변수 업데이트
      index = (index + 1) % txtArr.length;
      // 해당 인덱스에 해당하는 텍스트를 가져와서 currentTxt 배열로 설정
      currentTxt = txtArr[index].split('');
      // 다음 텍스트를 쓰기 시작
      writeTxt();
    }
  }
  writeTxt();
})();

```

- 애니메이션 스크롤 이동

```js
const animationMove = function (selector) {
  // select 매개변수로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // 현재 브라우저의 스크롤 정보(Y값)
  const browserScrollY = window.pageYOffset;
  // 이동할 대상의 위치 (Y값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};
// 스크롤 이벤트 연결하기
// 'data-animation-scroll' 속성이
// 'true'로 설정된 모든 요소를 선택하여 scollMoveEl 변수에 할당
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
// 선택한 요소들에 클릭 이벤트를 등록
for (let i = 0; i < scollMoveEl.length; i++) {
  scollMoveEl[i].addEventListener('click', function (e) {
    // 클릭된 요소의 'data-target' 속성 값을 가져와서 target 변수에 할당
    const target = this.dataset.target;
    // animationMove 함수를 호출하여 스크롤 애니메이션을 시작
    animationMove(target);
  });
}
```

## Ⅴ) 프로젝트를 마치며 느낀 점

배우기 시작한지 얼마 안되서 함수를 사용하는 것이 자연스럽지 못했던 것 같아 아쉽다.
함수를 다 외우진 않고 찾아보는것에 좀 시간을 할당했다면
구조를 더 이해하는데 집중하고 시간을 많이 투자했다.
그로인해 함수가 눈에 들어오고 In 과 Out 이 명확해져 이해하기 좀더 수월했다.
함수 사용이 좀 더 원활해 지려면 코드를 보다 많이 작성하는 방법 밖에는 없을 것 같다.

# Peace Out! 🙌
