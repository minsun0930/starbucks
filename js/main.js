// 검색창 부분 자바스크립트
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
  
});

//blur는 포커스가 해제 되었을때 
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});



// 스크롤 기준으로 사이드 배너 안보이게 하기 lodash cdn 사용
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY>500){
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); 안보이는 것일뿐 누를 수 있는 상태
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      //js에선 문자 데이터로 표현
    });
    // 페이지 상단 버튼 보이게하기
    // gsap.to('#to-top',.2,{
    //   x:0
    // });
    // 아이디 선택자로 가져올 수 도있지만 두번 작업하게 되니 toTopEl를 사용해서 하기
    gsap.to(toTopEl,.2,{
      x:0
    });
  }else{
    // badgeEl.style.display = 'block';
     gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 페이지 상단 버튼 숨기기
    gsap.to(toTopEl,.2,{
      x:100
    });
  }
},300));
// 0.3초 의미 / 함수 중복 실행 방지 throttle함수가 자동화시키기
//  _.throttle(함수, 몇초에 실행될 시간)



//페이지 상단 버튼 기능
toTopEl.addEventListener('click',function(){
  // 윈도우 객체는 화면 창
  gsap.to(window,.7,{
    scrollTo:0
  });
})


// 배너 사진 연달아서 자연스럽게 나오게 하기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl, .1,{
    delay:(index+1)*.7,
    opacity:1
  });
});

// swiper 생성자(클래스)
// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay:true,
  loop: true
});

//아래 이벤트 슬라이드
new Swiper('.promotion .swiper-container',{
  slidesPerView :3, //한번에 보여줄 슬라이드 개수
  spaceBetween :10, //간격
  centeredSlides: true,  //중앙부터 시작
  loop : true,
  // autoplay:{
  //   // 5초가 5000
  //   delay:5000
  // }
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자의 페이지 번호 요소제어 가능 여부
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});


// 푸터 위에 슬라이드

new Swiper('.awards .swiper-container',{
  autoplay:true,
  slidesPerView : 5,
  spaceBetween:30,
  loop : true,
  navigation:{
  prevEl:'.awards .swiper-prev',
  nextEl:'.awards .swiper-next'
 }
});

const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
//현재 보이는중

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    //처음에는 false이고 위에 선언으로 true로 바껴서 숨김 처리!
    promotionEl.classList.add('hide');
  }else{
    // 여기는 반대로 true였다가 false가 되어서 보임처리!
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


//영상 위에 둥둥 떠다니는 기능
function floatingObject(selector, delay, size){
  gsap.to(
    selector, //선택자
    random(1.5,2.5), //애니메이션 동작 시간
    {  //옵션
    y:size,
    repeat : -1,
    yoyo:true, // 다시 위로 올라감
    ease: "power1.inOut",
    delay : random(0,delay)
  });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

// scroll magic 스크롤 기준으로 요소 등장하게 만들기
const spyEls =document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  // scene은 요소 감시 메소드
  new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)

});

//푸터 날짜 자동 적용
const thisYear = document.querySelector('.this-year');
// textcontent는 값을 지정하거나 알아냄
thisYear.textContent = new Date().getFullYear(); //2026

