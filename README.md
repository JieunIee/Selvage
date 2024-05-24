# Selvage

- 개인프로젝트: 전세계를 잇는 패션 플랫폼
- [배포 링크](https://selvage.vercel.app/)
- 테스트계정으로 로그인 가능

## 구현 기능
- Oauth 구글계정 로그인 / 회원가입
- 게시글, 댓글 작성
- 북마크 & 좋아요 & 팔로우
- 키워드에 따른 유저검색(debounce 적용)
- Headless CMS를 이용한 데이터 처리

## API 명세
|기능|HTTP 메서드|API Path|
|------|---|---|
|회원가입,로그인,로그아웃|(next-auth)|pages/api/auth|
|특정 유저 정보 요청|GET|api/users/{username}|
|로그인한 유저 정보 요청|GET|api/me|
|특정 게시글을 북마크에 추가/삭제 요청|PUT|api/bookmarks|
|특정 게시글에 댓글 게시 요청|POST|api/comments|
|특정 유저를 팔로우에 추가/삭제 요청|PUT|api/follow|
|특정 게시글에 라이크 추가 요청|PUT|api/likes|
|유저가 팔로우하는 유저의 게시글들 요청|GET|api/posts|
|게시글 게시 요청|POST|api/posts|
|특정 유저가 게시한 게시글들 요청|GET|api/posts/{id}|
|유저이름에 키워드가 포함되는 검색결과 요청|GET|api/search/{keyword}|

## 사용된 기술
- Next.js
- React
- TypeScript
- TailwindCSS
- Vercel (배포)

