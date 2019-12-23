// main.js
$(function(){
    // 카테고리 토글 버튼
  $('#category_btn').click(function(){
    $('#category').slideToggle();
  });

   // BX슬라이더
  $('.bx-slider').bxSlider({
    // 여기에 옵션 설정
    mode: 'horizontal',     // 효과설정
    auto: true,             // 자동재생
    easing: "ease-in-out",  // 가속도(timing-function)
    pause: 4000,            // 정지시간(대기)
    controls: false,        // prev, next 표시/비표시
    pager: true,           // 하단 인디케이터 표시/비표시
    responsive: false,
  });
  // 팝업창 표시(기본)
  $('.popup').addClass('show');

  // 닫기 버튼 클릭시 팝업장 종료
  $('#btn_close').click(function(){
    $('.popup').removeClass('show');
  });

});
