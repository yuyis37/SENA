var citaModel = {};

const mongoose = require("mongoose");


const Schema = mongoose.Schema;

var citaSchema = new Schema({
  nombre: String,
  identificacion:String,
  telefono:String,
  dia: String,
  hora: String,
  id:String,
  
 
});

const Mymodel = mongoose.model('cita', citaSchema);


 citaModel.guardar = function(post,callback){

const instancia = new Mymodel;
instancia.nombre = post.nombre
instancia.identificacion=post.identificacion
instancia.telefono = post.telefono
instancia.dia=post.dia
instancia.hora=post.hora

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
   citaModel.listar = function (post, callback) {
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
citaModel.listarId = function(post, callback){
  Mymodel.find({_id:post.id},{nombre:1,identificacion:1,telefono:1,_id:1,dia:1,hora:1},(err,registros)=>{
    if(err){
      console.log(err)
      return callback(err)
    } 
    else{
      return callback(registros)
    }
  })
}
citaModel.eliminar = function (post, callback) {
  Mymodel.findByIdAndDelete(post.id ,(error,resultados) => {
   if (error) {
     console.log(error);
     return callback(error);
   } else {
     return callback({state:true,mensaje:'Cita Eliminada'});
   }
  })
 }
citaModel.actualizar = function (post, callback) {
  Mymodel.findByIdAndUpdate(post.id, {
    nombre:post.nombre,
    identificacion:post.identificacion,
    telefono:post.telefono,
    dia:post.dia,
    hora:post.hora
  }, (error,citmodificado) => {
    if (error) {
        console.log(error);
        return callback(error);
      } else {
        console.log(citmodificado);
        return callback({state:true,mensaje:'Cita Modificada'})
      }
  })
};


  module.exports.cita =citaModel;