// express 모듈 가져오기
const express = require('express');
// express 실행
const app = express();

// get() 메서드 사용해서 라우팅 설정
// app.get(경로, 콜백함수);
// 해당 경로에 들어갔을 때 콜백함수가 실행
app.get('/', (req, res) => {
  // res.send('main page');
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.listen(8080, () => {
  console.log('서버 실행');
});
