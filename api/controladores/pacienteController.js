const { response } = require("express");
const { request } = require("http");

var pacienteModel = require(appRoot + "/api/modelos/pacienteModel.js").paciente;

var pacienteController = {};

pacienteController.guardar = function(request,response){
  var post = {
    id:request.body.id,
    nombre:request.body.nombre,
    identificacion:request.body.identificacion,
    email:request.body.email,
    direccion:request.body.direccion,
    telefono:request.body.telefono,
    //_id:request.body.rol_id,
  }
  if(post.nombre == null || post.nombre == undefined || post.nombre =='' ){
    response.json({state:false,mensaje:'campo obligatorio del nombre'})
    return false;
  }
  if(post.identificacion == null || post.identificacion == undefined || post.identificacion =='' ){
    response.json({state:false,mensaje:'campo obligatorio del identificacion'})
    return false;
  }
  if(post.email == null || post.email == undefined || post.email =='' ){
    response.json({state:false,mensaje:'campo obligatorio de la email'})
    return false;
  }
  if(post.direccion == null || post.direccion == undefined || post.direccion =='' ){
    response.json({state:false,mensaje:'campo obligatorio del direccion'})
    return false;
  }
  if(post.telefono == null || post.telefono == undefined || post.telefono =='' ){
    response.json({state:false,mensaje:'campo obligatorio del telefono'})
    return false;
  }
  console.log("----------------------> request");
  console.log(post);

  pacienteModel.guardar(post,function (respuesta) {
    console.log("--------------->response");
    console.log(respuesta);
    response.json({state:true, data:respuesta});
  });
};

pacienteController.listar = function (request, response) {
    pacienteModel.listar(null,function (respuesta) {
      console.log("--------------->response");
      console.log(respuesta);
      response.json(respuesta);
    });
    };
    
pacienteController.listarId = function(request,response){
  var post={
    id:request.body.id
  }
  if(post.id == null || post.id == undefined || post.id =='' ){
    response.json({state:false,mensaje:'el campo id es obligatorio'})
    return false;
  }
 pacienteModel.listarId(post,function(respuesta){
   response.json(respuesta)
 }) 
}

pacienteController.actualizar = function(request,response){
  var usuario = {
      nombre:request.body.nombre,
      identificacion:request.body.identificacion,
      email:request.body.email,
      direccion:request.body.direccion,
      telefono:request.body.telefono,
      id:request.body.id
  }
  console.log('------------------->request')
  console.log(usuario)

  if(usuario.id == "" || usuario.id == undefined || usuario.id == null){
      response.json({state:false,mensaje:'el campo id es obligatorio'})
      return false;
  }
  if(usuario.nombre == "" || usuario.nombre == undefined || usuario.nombre == null){
      response.json({state:false,mensaje:'el campo nombre es obligatorio'})
      return false;
  }
  if(usuario.identificacion == "" || usuario.identificacion == undefined || usuario.identificacion == null){
      response.json({state:false,mensaje:'el campo identificacion es obligatorio'})
      return false;
  }
  if(usuario.email == "" || usuario.email == undefined || usuario.email == null){
    response.json({state:false,mensaje:'el campo email es obligatorio'})
    return false;
}
  if(usuario.direccion == "" || usuario.direccion == undefined || usuario.direccion == null){
      response.json({state:false,mensaje:'el campo direccion es obligatorio'})
      return false;
  }
  if(usuario.telefono == "" || usuario.telefono == undefined || usuario.telefono == null){
      response.json({state:false,mensaje:'el campo telefono es obligatorio'})
      return false;
  }
  pacienteModel.actualizar(usuario,function(respuesta){
      console.log('------->response')
      console.log(respuesta)
      response.json(respuesta)
  })
}  
pacienteController.eliminar = function (request, response) {
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

   pacienteModel.eliminar(post,function(resultado){
     response.json(resultado)
   })
 };


    module.exports.paciente = pacienteController;
 