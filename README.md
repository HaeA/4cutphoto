# 4cutphoto


# 4cutphoto
=============

네컷사진은 스파르타 코딩 클럽에서 제공한 무료 강의를 보며 추가적으로 수정한 내용이 반영되어 있습니다.
-------------



## 사용법:
  1. download index.html, script.js, picture 폴더
  2. picture 폴더에 4장의 사진을 넣습니다.
  3. index.html의 <style>에 있는 #image{} 안에
      ```css
      background-image: url('이미지링크');
      ```
  를 추가합니다.
  
## insert video:
  만약 네번째 사진을 video로 대체하려면 <body>의 <div id=image4> 대신,
 ```html
  <div class="photo-frame">
     <iframe class="video"
             src=""
             frameborder="0"
  </div>
 ```
   로 코드를 대체합니다.
 +) script.js 에서도 4번째 이미지에 대한 내용을 삭제할 수 있습니다.
     
 ## replace background image:
    index.html 의 <style>에서 body tag를 찾아 background-image의 링크를 원하는 이미지로 바꿔줍니다.
 
