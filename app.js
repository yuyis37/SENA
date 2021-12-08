const mongoose = require("mongoose");

global.express = require('express')
global.app = express();
global.MD5 = require('MD5')
global.path = require('path')
global.appRoot = path.resolve(__dirname)
global.config = require(  './config.js').config
console.log(config)
var bodyParser = require('body-parser');

app.all('*',function(req, res, next){

  var whitelist = req.headers.origin;

  res.header('Access-Control-Allow-Origin', whitelist);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
  res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.header("Access-Control-Allow-Credentials", "true");
  
  next();

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

require(appRoot + '/routes/rutas.js')

mongoose.connect("mongodb://127.0.0.1:27017/" + config.nombredb,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, response) {
    if (error) {
      console.log(error);
    }
     else {
      console.log("Conexion a Mongo correcta");
    }
  }
);


app.use("/", express.static(__dirname + "/api"));


app.listen(config.puerto,function(){
    console.log('Servidor funcionando por el puerto' + config.puerto )
})
