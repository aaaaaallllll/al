const express=require('express');
const userRouter=require('./routes/router.js');
const bodyParser=require('body-parser');
var server=express();
server.listen(8080);
server.use(express.static('static'));
server.use(bodyParser.urlencoded({extended:false}));
server.use('/router',userRouter);


