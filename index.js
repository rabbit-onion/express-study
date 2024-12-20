// express 모듈 가져오기
const express = require('express');
// express 실행
const app = express();

// app.set('port', 환경변수 || 8080);
app.set('port', process.env.PORT || 8080);

// 정적 파일 제공
app.use(express.static('public'));

// 로깅 미들웨어 - 어떤 요청이 왔는지 확인
app.use((req, res, next) => {
  console.log('-------------------');
  console.log('새로운 요청이 왔어요!');
  console.log('요청 종류:', req.method);
  console.log('요청 주소:', req.url);
  console.log('-------------------');
  next(); //
});

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

// posts 경로에서 블로그 글 목록을 가져오는 API
// app.get(경로, 콜백함수)
app.get('/posts', (req, res) => {
  res.send('블로그 글 목록');
});

// 새 게시글 작성
// app.post(경로, 콜백함수)
app.post('/posts/write', (req, res) => {
  res.send('새 글 작성');
});

// 특정 게시글 조회
app.get('/posts/:id', (req, res) => {
  res.send('id ' + req.params.id + '인 글 조회');
});

// 특정 게시글 수정
app.put('/posts/:id', (req, res) => {
  res.send('id ' + req.params.id + '인 글 수정');
});

// 특정 게시글 삭제
app.delete('/posts/:id', (req, res) => {
  res.send('id ' + req.params.id + '인 글 삭제');
});

app.listen(app.get('port'), () => {
  console.log('서버 실행');
});
