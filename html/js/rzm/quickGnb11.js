var htmlQuickMenu = '<strong>마이데이터</strong>';
htmlQuickMenu += '<div class="innerList">';
htmlQuickMenu += '<ul>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">MY자산</a>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">MY크레딧</a>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">MY카드</a>';
htmlQuickMenu += '<ul>';
htmlQuickMenu += '<li><a href="#" class="on">카드현황</a></li>';
htmlQuickMenu += '<li><a href="#">소비유형분석</a></li>';
htmlQuickMenu += '</ul>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">MY론</a>';
htmlQuickMenu += '<ul>';
htmlQuickMenu += '<li><a href="#">대출현황</a></li>';
htmlQuickMenu += '<li><a href="#">대출컨설팅</a></li>';
htmlQuickMenu += '</ul>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">MY연체</a>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '</ul>';
htmlQuickMenu += '</div>';

console.log(htmlQuickMenu);
$('#header .quickGnb').append(htmlQuickMenu);
