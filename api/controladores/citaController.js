const { response } = require("express");
const { request } = require("http");

var citaModel = require(appRoot + "/api/modelos/citaModel.js").cita;

var citaController = {};

citaController.guardar = function(request,response){
  var post = {
    id:request.body.id,
    nombre:request.body.nombre,
    identificacion:request.body.identificacion,
    telefono:request.body.telefono,
    dia:request.body.dia,
    hora:request.body.hora,
    //_id:request.body.rol_id,
  }
  if(post.nombre == null || post.nombre == undefined || post.nombre =='' ){
    response.json({state:false,mensaje:'campo nombre obligatorio'})
    return false;
  }
  if(post.identificacion == null || post.identificacion == undefined || post.identificacion =='' ){
    response.json({state:false,mensaje:'campo identificacion obligatorio '})
    return false;
  }
  if(post.telefono == null || post.telefono == undefined || post.telefono =='' ){
    response.json({state:false,mensaje:'campo telefono obligatorio'})
    return false;
  }
  if(post.dia == null || post.dia == undefined || post.dia =='' ){
    response.json({state:false,mensaje:'campo dia obligatorio'})
    return false;
  }
  if(post.hora == null || post.hora == undefined || post.hora =='' ){
    response.json({state:false,mensaje:'campo hora obligatorio'})
    return false;
  }
  console.log("----------------------> request");
  console.log(post);

  citaModel.guardar(post,function (respuesta) {
    console.log("--------------->response");
    console.log(respuesta);
    response.json({state:true, data:respuesta});
  });
};

citaController.listar = function (request, response) {
    citaModel.listar(null,function (respuesta) {
      console.log("--------------->response");
      console.log(respuesta);
      response.json(respuesta);
    });
    };
    
citaController.listarId = function(request,response){
  var post={
    id:request.body.id
  }
  if(post.id == null || post.id == undefined || post.id =='' ){
    response.json({state:false,mensaje:'el campo id es obligatorio'})
    return false;
  }
 citaModel.listarId(post,function(respuesta){
   response.json(respuesta)
 }) 
}

citaController.actualizar = function(request,response){
  var paciente = {
      nombre:request.body.nombre,
      identificacion:request.body.identificacion,
      telefono:request.body.telefono,
      dia:request.body.dia,
      hora:request.body.hora,
      id:request.body.id
  }
  console.log('------------------->request')
  console.log(paciente)

  if(paciente.id == "" || paciente.id == undefined || paciente.id == null){
      response.json({state:false,mensaje:'el campo id es obligatorio'})
      return false;
  }
  if(paciente.nombre == "" || paciente.nombre == undefined || paciente.nombre == null){
      response.json({state:false,mensaje:'el campo nombre es obligatorio'})
      return false;
  }
  if(paciente.identificacion == "" || paciente.identificacion == undefined || paciente.identificacion == null){
      response.json({state:false,mensaje:'el campo identificacion es obligatorio'})
      return false;
  }
  if(paciente.telefono == "" || paciente.telefono == undefined || paciente.telefono == null){
    response.json({state:false,mensaje:'el campo telefono es obligatorio'})
    return false;
}
  if(paciente.dia == "" || paciente.dia == undefined || paciente.dia == null){
      response.json({state:false,mensaje:'el campo dia es obligatorio'})
      return false;
  }
  if(paciente.hora == "" || paciente.hora == undefined || paciente.hora == null){
      response.json({state:false,mensaje:'el campo hora es obligatorio'})
      return false;
  }
  citaModel.actualizar(paciente,function(respuesta){
      console.log('------->response')
      console.log(respuesta)
      response.json(respuesta)
  })
}  
citaController.eliminar = function (request, response) {
  var post = {
    id:request.body.id
  }
  if (
   post.id == "" ||
   post.id == undefined ||
   post.id == null
 ) {
   response.json({ state: false, mensaje: "el campo id es obligatorio" });
   return false;
 }

   citaModel.eliminar(post,function(resultado){
     response.json(resultado)
   })
 };


    module.exports.cita = citaController;
 