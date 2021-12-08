var pacienteModel = {};

const mongoose = require("mongoose");


const Schema = mongoose.Schema;

var pacienteSchema = new Schema({
  nombre: String,
  identificacion:String,
  email:String,
  direccion: String,
  telefono: String,
  id:String,
  
 
});

const Mymodel = mongoose.model('paciente', pacienteSchema);


 pacienteModel.guardar = function(post,callback){

const instancia = new Mymodel;
instancia.nombre = post.nombre
instancia.identificacion=post.identificacion
instancia.email = post.email
instancia.direccion=post.direccion
instancia.telefono=post.telefono

instancia.save((error,userCreate) =>{
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
   pacienteModel.listar = function (post, callback) {
    Mymodel.find({},(error,documentos) => {
      if (error) {
        console.log(error);
        return callback(error);
      } else {
        console.log(documentos);
        return callback(documentos);
      }
    }) 
  }
pacienteModel.listarId = function(post, callback){
  Mymodel.find({_id:post.id},{nombre:1,identificacion:1,email:1,_id:1,direccion:1,telefono:1},(err,registros)=>{
    if(err){
      console.log(err)
      return callback(err)
    } 
    else{
      return callback(registros)
    }
  })
}
pacienteModel.eliminar = function (post, callback) {
  Mymodel.findByIdAndDelete(post.id ,(error,resultados) => {
   if (error) {
     console.log(error);
     return callback(error);
   } else {
     return callback({state:true,mensaje:'Paciente Eliminado'});
   }
  })
 }
pacienteModel.actualizar = function (post, callback) {
  Mymodel.findByIdAndUpdate(post.id, {
    nombre:post.nombre,
    identificacion:post.identificacion,
    email:post.email,
    direccion:post.direccion,
    telefono:post.telefono
  }, (error,pacmodificado) => {
    if (error) {
        console.log(error);
        return callback(error);
      } else {
        console.log(pacmodificado);
        return callback({state:true,mensaje:'Paciente Modificado'})
      }
  })
};


  module.exports.paciente =pacienteModel;