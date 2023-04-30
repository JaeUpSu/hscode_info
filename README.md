# hscode_info

> 나를 소개하기 위한 web 이다.

> React 와 DJango 를 cors header 와 csrf_token 을 어기지 않게 연동하고
  나를 소개하는 각 Contents 와 요청사항을 실시간으로 Discord bot 을 통해 받을 수 있는
  웹 페이지

## 기능

    - [x] React : HTML/JS/CSS 구조 맞추기
        - [x] 사진, 소개글
        - [x] 포토폴리오 구현 영상 or 움짤 or 사진 슬라이드
            - [x] 모달로 만들기
            - [x] 내용 입력

        - [x] git, velog, insta link 버튼
        - [x] Contact Me
            - [x] modal (개인정보, 요청사항)
            - [x] user DB 연동
            - [x] discord bot 연동

        - [x] 편집버튼 만들기
            - [x] 각 text 에 수정버튼
            - [x] feeds DB 연동

    - [x] Django 로 API 설계
        - [x] models 설계
            - [x] users, feeds
        - [x] serializers 설계
        - [x] views 설계
        - [x] admin 설정
        - [x] urls 설정

## 도메인

    - [x] users Model
        - [x] columns : name, tel, email, request

    - [x] feeds Model
        - [x] columns : id, content, created

    - [x] Model methods
        - [x] methods : add, remove, update, show


    - [x] react
        - [x] header
            - [x] top-menu
              - [x] It's me
              - [x] portfolio
              - [x] linked in
              - [x] contact me

        - [x] container
            - [x] top
                - [x] background
                - [x] info

            - [x] portfolio
                - [x] title
                - [x] contents
                - [x] slider
                - [x] gif or video

            - [x] linked in
                - [x] velog
                - [x] git
                - [x] instagram
                - [x] linked-in

        - [x] modal
            - [x] contact me
                - [x] django model user data input
                - [x] discord bot make

<br>

## 사용한 GIT API

- https://github.com/mxmzb/react-marquee-slider
- https://github.com/tengbao/vanta
- https://sweetalert2.github.io/

####

    - Header 모든 페이지에 달기
    - pdf Link 달기
