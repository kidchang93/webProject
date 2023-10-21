// 자바스크립트 실행문
// 텍스트 작성과 삭제 즉시 실행 함수
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
// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
// header 매개변수로 이동할 대상 요소 노드 가져오기
const headerEl = document.querySelector('header');
// 스크롤 이벤트가 발생할 때 scrollCheck 함수를 호출
window.addEventListener('scroll', function () {
  requestAnimationFrame(scrollCheck);
});
// 스크롤 체크를 수행하는 함수 정의
function scrollCheck() {
  // 현재 브라우저의 수직 스크롤 위치를 가져오는데
  // 브라우저에 따라 window.scrollY 또는 window.pageYOffset을 사용
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  // 스크롤 위치가 0보다 크면 (스크롤이 발생한 경우)
  if (browerScrollY > 0) {
    // 'active' 클래스를 header 요소에 추가하여 헤더를 활성화 상태로 만듦
    headerEl.classList.add('active');
  } else {
    // 스크롤 위치가 0이면 (스크롤이 없는 경우)
    // 'active' 클래스를 header 요소에서 제거하여 헤더를 비활성화 상태로 만듦
    headerEl.classList.remove('active');
  }
}
// 애니메이션 스크롤 이동
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
