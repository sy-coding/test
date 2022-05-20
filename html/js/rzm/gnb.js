var gnbHTML = '<div class="gnbInner" style="display:none">'; //180618 수정
gnbHTML += '<div class="gnbT">';
gnbHTML += '<a href="#" class="btnHome"><span class="blind">홈</span></a>';
gnbHTML += '<a href="#" class="btnLogout"><span class="blind">로그아웃</span></a>';
gnbHTML += '<a href="#" class="btnAlarm"><span class="blind">알림</span><em></em></a>'; //180620 수정
gnbHTML += '<a href="#" class="btnSetting"><span class="blind">환경설정</span></a>';
gnbHTML += '<button type="button" id="close" class="gnbClose"><span class="blind">전체메뉴 닫기</span></button>'; //180618 수정
gnbHTML += '<div class="userInfo">';
gnbHTML += '<p class="name"><span>배진호</span> 님</p>';
gnbHTML += '<a href="#">현재 이용중인 상품은 <span>2</span>건입니다.</a>';
gnbHTML += '</div>';
gnbHTML += '<ul class="gnbEasy">';
gnbHTML += '<li><a href="#">신용등급<br />조회</a></li>';
gnbHTML += '<li><a href="#">신용변동<br />내역</a></li>';
gnbHTML += '<li><a href="#">신용조회<br />확인</a></li>';
gnbHTML += '<li><a href="#">인증내역<br />확인</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</div>';
gnbHTML += '<div class="gnbList">';
gnbHTML += '<ul class="depth01">';
gnbHTML += '<li><a href="#" class="on">상품 &amp; 가입</a>';
gnbHTML += '<ul class="depth02" style="display:block;">';
gnbHTML += '<li><a href="#">신용</a>';
gnbHTML += '<ul class="depth03 default">'; //180516 수정
gnbHTML += '<li><a href="#" class="best">종합신용지키미 <em>BEST</em></a></li>';  //180514 수정
gnbHTML += '<li><a href="#">신용지키미</a></li>';
gnbHTML += '<li><a href="#">신용명의지키미</a></li>';
gnbHTML += '<li><a href="#">신용지키미 상품권</a></li>';
gnbHTML += '<li><a href="#">신용명의지키미 V3 365</a></li>';
gnbHTML += '<li><a href="#">신용보고서</a></li>';
gnbHTML += '<li><a href="#">커플신용보고서</a></li>';
gnbHTML += '<li><a href="#">비회원신용조회</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">카드</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">쇼핑지키미</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">정보</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">명의도용지키미</a></li>';
gnbHTML += '<li><a href="#">명의도용지키미 상품권</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">가족</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">가족신용지키미</a></li>';
gnbHTML += '<li><a href="#">가족명의지키미</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">자산</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">지갑지키미</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">나의 지키미</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">이용내역</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">이용중인 서비스</a></li>';
gnbHTML += '<li><a href="#">결제내역 조회</a></li>';
gnbHTML += '<li><a href="#">가족구성원 동의</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">무료 신용변동 알람</a></li>';
gnbHTML += '<li><a href="#">신용상담</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">신용상담 신청</a></li>';
gnbHTML += '<li><a href="#">신용상담 내역</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">할인쿠폰/상품권</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">할인쿠폰 관리</a></li>';
gnbHTML += '<li><a href="#">상품권 등록</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">회원정보 관리</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">회원정보 변경</a></li>';
gnbHTML += '<li><a href="#">비밀번호 변경</a></li>';
gnbHTML += '<li><a href="#">회원탈퇴</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">조회하기2222222</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">나의 신용 한 눈에 보기</a>';
gnbHTML += '<li><a href="#">나의 신용정보</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">신용변동내역</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">월간변동보고서</a></li>';
gnbHTML += '<li><a href="#">신용명세서</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">신용평점/등급</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">신용평점/등급</a></li>';
gnbHTML += '<li><a href="#">신용등급 예측하기</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">신용개설내역</a></li>';
gnbHTML += '<li><a href="#">카드관리</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">보유카드내역</a></li>';
gnbHTML += '<li><a href="#">카드이용실적</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">대출관리</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">대출거래내역</a></li>';
gnbHTML += '<li><a href="#">채무조정내역</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">연체관리</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">단기연체내역</a></li>';
gnbHTML += '<li><a href="#">채무불이행내역</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">채무보증내역</a></li>';
gnbHTML += '<li><a href="#">공공정보</a></li>';
gnbHTML += '<li><a href="#">금융질서문란</a></li>';
gnbHTML += '<li><a href="#">신용조회관리</a></li>';
gnbHTML += '<li><a href="#">신상정보관리</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">NICE등록정보</a></li>';
gnbHTML += '<li><a href="#">금융기관등록정보</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">A I 신용관리</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">크레딧 어드바이저</a></li>';
gnbHTML += '<li><a href="#">NICE 소득정보</a></li>';
gnbHTML += '<li><a href="#">신용구매력지수</a></li>';
gnbHTML += '<li><a href="#">대출거래지수</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">가족신용정보</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">가족구성원 관리</a></li>';
gnbHTML += '<li><a href="#">가족신용변동내역</a></li>';
gnbHTML += '<li><a href="#">가족신용정보</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">신용요약정보</a></li>';
gnbHTML += '<li><a href="#">신용평점/등급</a></li>';
gnbHTML += '<li><a href="#">가족카드관리</a></li>';
gnbHTML += '<li><a href="#">가족대출관리</a></li>';
gnbHTML += '<li><a href="#">가족연체관리</a></li>';
gnbHTML += '<li><a href="#">채무보증관리</a></li>';
gnbHTML += '<li><a href="#">가족공공정보</a></li>';
gnbHTML += '<li><a href="#">가족금융질서문란</a></li>';
gnbHTML += '<li><a href="#">가족신용조회관리</a></li>';
gnbHTML += '<li><a href="#">가족신상정보관리</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">신용보고서</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">구매보고서</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">보고서 내역</a></li>';
gnbHTML += '<li><a href="#">보고서 열람</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">수신된 보고서 열람</a></li>';
gnbHTML += '<li><a href="#">신용보고서 유효성 검증</a></li>';
gnbHTML += '<li><a href="#">신용보고서 리포트</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">커플신용보고서</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">커플신용보고서 열람</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">보고서 내역</a></li>';
gnbHTML += '<li><a href="#">보고서 열람</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">커플동의하기</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">비회원신용조회</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">보호하기</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">보호내역 한 눈에 보기</a>';
gnbHTML += '<li><a href="#">금융사기방지</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">금융사기방지 설정</a></li>';
gnbHTML += '<li><a href="#">신용조회차단/발생내역</a></li>';
gnbHTML += '<li><a href="#">금융사기방지 타임라인</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">나의 명의보호</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">명의보호설정</a></li>';
gnbHTML += '<li><a href="#">명의보호 내역조회</a></li>';
gnbHTML += '<li><a href="#">명의보호 타임라인</a></li>';
gnbHTML += '<li><a href="#">스마트 인증관리</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">스마트인증내역 조회</a></li>';
gnbHTML += '<li><a href="#">스마트인증알람 관리</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">AI 명의보호</a>';
gnbHTML += '<ul class="depth04">';
gnbHTML += '<li><a href="#">빅데이터 패턴 분석</a></li>';
gnbHTML += '<li><a href="#">위치기반 인증 분석</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul class="depth03">';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">나의 주차안심</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">주차안심 연결관리</a></li>';
gnbHTML += '<li><a href="#">연락판 발급 신청</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">V3 365 정보보호</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">V3 제품번호 확인/등록</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">나의 쇼핑안심</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">일회용 전화번호</a></li>';
gnbHTML += '<li><a href="#">쇼핑할인쿠폰</a></li>';
gnbHTML += '<li><a href="#">구매물품 손실보상</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">가족명의보호</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">가족구성원관리</a></li>';
gnbHTML += '<li><a href="#">가족구성원 등록</a></li>';
gnbHTML += '<li><a href="#">가족명의 보호설정</a></li>';
gnbHTML += '<li><a href="#">가족명의 보호내역</a></li>';
gnbHTML += '<li><a href="#">가족명의보호 타임라인</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">나의 지갑안심</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">새 지갑 구매지원</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">체험하기</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">전국민 신용조회</a></li>';
gnbHTML += '<li><a href="#">전국민 명의보호</a></li>';
gnbHTML += '<li><a href="#">개인정보유출 피해예방 안내</a></li>';
gnbHTML += '<li><a href="#">신용카드관리 컨설팅</a></li>';
gnbHTML += '<li><a href="#">대출가능진단</a></li>';
gnbHTML += '<li><a href="#">카드발급진단</a></li>';
gnbHTML += '<li><a href="#">나의 아이핀</a></li>';
gnbHTML += '<li><a href="#">나의 마이핀</a></li>';
gnbHTML += '<li><a href="#">신용영수증</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">참여하기</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">이벤트</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">진행 중인 이벤트</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">비금융정보신용평가 반영</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">서비스 소개</a></li>';
gnbHTML += '<li><a href="#">비금융정보 등록</a></li>';
gnbHTML += '<li><a href="#">비금융정보 등록현황 확인</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">신용정보 정정청구</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">신용정보 정정청구</a></li>';
gnbHTML += '<li><a href="#">신용정보 정정청구 확인</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">신용등급 이의신청</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">신용등급 이의신청</a></li>';
gnbHTML += '<li><a href="#">신용등급 이의신청 확인</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">알아보기</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">전국민 신용교육</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">신용기초 멘토링</a></li>';
gnbHTML += '<li><a href="#">신용전략 멘토링</a></li>';
gnbHTML += '<li><a href="#">신용활용 멘토링</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">고객센터</a>';
gnbHTML += '<ul class="depth02">';
gnbHTML += '<li><a href="#">자주하는 질문</a></li>';
gnbHTML += '<li><a href="#">서비스 문의하기</a>';
gnbHTML += '<ul class="depth03">';
gnbHTML += '<li><a href="#">서비스 상담신청</a></li>';
gnbHTML += '<li><a href="#">서비스 상담내역</a></li>';
gnbHTML += '<li><a href="#">비회원 문의하기</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '<li><a href="#">공지사항</a></li>';
gnbHTML += '<li><a href="#">NICE지키미 소개</a></li>';
gnbHTML += '</ul>';
gnbHTML += '</li>';
gnbHTML += '</ul>';
gnbHTML += '</div>';
gnbHTML += '<button type="button" id="close" class="gnbClose last"><span class="blind">전체메뉴 닫기</span></button>'; //180618 수정
gnbHTML += '</div>';
//console.log(gnbHTML);
$('#gnb').append(gnbHTML);