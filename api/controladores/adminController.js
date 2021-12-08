const { response } = require("express");
const { request } = require("http");

var adminModel = require(appRoot + "/api/modelos/adminModel.js").admin;

var adminController = {};

adminController.guardar = function(request,response){
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

  adminModel.guardar(post,function (respuesta) {
    console.log("--------------->response");
    console.log(respuesta);
    response.json({state:true, data:respuesta});
  });
};

adminController.listar = function (request, response) {
    adminModel.listar(null,function (respuesta) {
      console.log("--------------->response");
      console.log(respuesta);
      response.json(respuesta);
    });
    };
    
adminController.listarId = function(request,response){
  var post={
    id:request.body.id
  }
  if(post.id == null || post.id == undefined || post.id =='' ){
    response.json({state:false,mensaje:'el campo id es obligatorio'})
    return false;
  }
 adminModel.listarId(post,function(respuesta){
   response.json(respuesta)
 }) 
}

adminController.actualizar = function(request,response){
  var producto = {
      nombre:request.body.nombre,
      identificacion:request.body.identificacion,
      email:request.body.email,
      direccion:request.body.direccion,
      telefono:request.body.telefono,
      id:request.body.id
  }
  console.log('------------------->request')
  console.log(producto)

  if(producto.id == "" || producto.id == undefined || producto.id == null){
      response.json({state:false,mensaje:'el campo id es obligatorio'})
      return false;
  }
  if(producto.nombre == "" || producto.nombre == undefined || producto.nombre == null){
      response.json({state:false,mensaje:'el campo nombre es obligatorio'})
      return false;
  }
  if(producto.identificacion == "" || producto.identificacion == undefined || producto.identificacion == null){
      response.json({state:false,mensaje:'el campo identificacion es obligatorio'})
      return false;
  }
  if(producto.email == "" || producto.email == undefined || producto.email == null){
    response.json({state:false,mensaje:'el campo email es obligatorio'})
    return false;
}
  if(producto.direccion == "" || producto.direccion == undefined || producto.direccion == null){
      response.json({state:false,mensaje:'el campo direccion es obligatorio'})
      return false;
  }
  if(producto.telefono == "" || producto.telefono == undefined || producto.telefono == null){
      response.json({state:false,mensaje:'el campo telefono es obligatorio'})
      return false;
  }
  adminModel.actualizar(producto,function(respuesta){
      console.log('------->response')
      console.log(respuesta)
      response.json(respuesta)
  })
}  
adminController.eliminar = function (request, response) {
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

   adminModel.eliminar(post,function(resultado){
     response.json(resultado)
   })
 };


    module.exports.admin = adminController;
 