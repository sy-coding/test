var htmlQuickMenu = '<strong>커플신용보고서</strong>';
htmlQuickMenu += '<div class="innerList">';
htmlQuickMenu += '<ul>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">커플신용보고서 열람</a>';
htmlQuickMenu += '<ul>';
htmlQuickMenu += '<li><a href="#">보고서 내역</a></li>';
htmlQuickMenu += '<li><a href="#">보고서 열람</a></li>';
htmlQuickMenu += '</ul>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '<li>';
htmlQuickMenu += '<a href="#">커플동의하기</a>';
htmlQuickMenu += '</li>';
htmlQuickMenu += '</ul>';
htmlQuickMenu += '</div>';

//console.log(htmlQuickMenu);
$('#header .quickGnb').append(htmlQuickMenu);