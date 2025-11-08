const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
// app.get('/dog', (req, res) => {
//   res.send('Hello Dog')
// })
// app.get('/cat', (req, res) => {
//   res.send('Hello Cat')
// })

app.post('/LogIn.html', (req, res) => {
        
    const user_id = req.body.user_id;
    const password = req.body.password; 
    var sql = 'select * from member where user_ID=? and userpass=?'
    var values = [user_id,password];
    
    connection.query(sql, values, function(err, result){
        if(err) throw err;
        res.send(result);
    })

    res.send(sql);
});

app.listen(port, () => {
    console.log(`서버가 http://gamex.iptime.org:${port} 에서 실행 중입니다.`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // body-parser 미들웨어 설정
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // 로그인 페이지를 렌더링하는 라우트
// app.get('/login', (req, res) => {
//     res.send('Hello World!');
// });

// // 로그인 폼에서 POST 요청이 올 때 처리하는 라우트
// app.post('/login', (req, res) => {
  
//     const user_id = req.body.user_id;
//     const password = req.body.password; 
//     var sql = 'select * from member where user_ID=? and userpass=?'
    
//     var values = [user_id,password];
//     // 실제 서비스에서는 데이터베이스와 연동하여 아이디/비밀번호를 검증합니다.
//     // 여기서는 간단하게 콘솔 로그를 출력합니다.
//     console.log(`아이디: ${user_id}, 비밀번호: ${password}`);

//     connection.query(sql, values, function(err, result){
//         if(err) throw err;
//         res.send(result);
//     })
// });
 

// // 서버 시작
// app.listen(port, () => {
//     console.log(`서버가 http://gamex.iptime.org:${port} 에서 실행 중입니다.`);
// });

