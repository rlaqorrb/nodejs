const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');


var db;
MongoClient.connect('mongodb+srv://a12314:rlatpdms0911@cluster0.yxtdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(에러, client){
  app.listen(8080, function(){
    if(에러) return console.log(에러)

    db = client.db('todoapp');



    app.post('/add', function(qus, res){
      // res.send('전송완료')
      res.sendFile(__dirname + '/HTML/index.html')

      console.log(qus.body.title);
      console.log(qus.body.date);

      db.collection('post').insertOne({제목: qus.body.title, 날짜 : qus.body.date}, function(에러, 결과){
        console.log('저장완료');
      });
    });



    console.log('listening on 8080');
  });
})



app.get('/', function(qus, res){
  res.sendFile(__dirname + '/HTML/index.html')
});

app.get('/write.html', function(qus, res){
  res.sendFile(__dirname + '/HTML/write.html')
});

app.get('/CSS/write.css', function(qus, res){
  res.sendFile(__dirname + '/CSS/write.css')
});

app.get('/list', function(qus, res){

  db.collection('post').find().toArray(function(에러, 결과){
    console.log(결과);
    res.render('list.ejs', {posts : 결과});
  });

});