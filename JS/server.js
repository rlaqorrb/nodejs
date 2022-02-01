const express = require('express');
const app = express();

app.listen(8080, function(){
  console.log('listening on 8080');
});


app.get('/pet', function(요청, 응답){
  응답.send('펫용풍 쇼핑할 수 있는 페이지입니다.')
});

app.get('/beauty', function(qus, res){
  res.send('뷰티 어쩌구 저쩌구')
});