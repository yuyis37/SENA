var usuariosModel = {};

const mongoose = require("mongoose");


const Schema = mongoose.Schema;

var usuariosSchema = new Schema({
  nombres: String,
  apellidos:String,
  email:String,
  celular: String,
  password: String,
  confirm: String,
  ciudad: String,
  rol_id:String,
  estado:Number,
  codigoactivacion:String
  
});

const Mymodel = mongoose.model('usuarios', usuariosSchema);

//Crear
usuariosModel.guardar = function(post,callback){

    const instancia = new Mymodel
    instancia.nombres = post.nombres
    instancia.apellidos = post.apellidos
    instancia.email = post.email
    instancia.password = post.password
    instancia.confirm = post.confirm
    instancia.ciudad = post.ciudad
    instancia.rol_id = 1
    instancia.codigoactivacion = Math.floor(Math.random() * 9999)+1000;
    instancia.estado = 0;

    instancia.save((error,userCreate)=>{
        if(error){
            console.log(error);
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})
        }
    })
}

usuariosModel.EmailExiste = function(post,callback){
    Mymodel.find({email:post.email},(err,registros)=>{
        if(err){
            console.log(err);
            return callback({state:false,info:err})
        }
        else{
           console.log(registros)
           return callback({state:true, data:registros})
        }
    })
}

module.exports.usuarios = usuariosModel