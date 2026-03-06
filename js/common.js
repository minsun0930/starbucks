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

//푸터 날짜 자동 적용
const thisYear = document.querySelector('.this-year');
// textcontent는 값을 지정하거나 알아냄
thisYear.textContent = new Date().getFullYear(); //2026