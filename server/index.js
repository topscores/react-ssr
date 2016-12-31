var express = require('express')
var app = express()
var renderHtml = require('./renderHtml.generated').default

app.use('*', function(req, res){
  res.send(renderHtml())
})

app.listen(3000, function(){
  console.log('Server listening at http://localhost:3000')
})