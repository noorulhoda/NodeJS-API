var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
const customerRoutes = require('./CustomerRoutes')

var db='mongodb://localhost/example';
mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true});

var port=3007;
app.listen(port,function(){
    console.log('listening. . . .')
})

app.use(bodyParser.json());
customerRoutes(app)
//middleWares
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})

