var usuariosModel = require(appRoot + '/api/modelos/usuariosModel.js').usuarios;

var usuariosController = {}

usuariosController.registro = function(request,response){
    var post={
        nombres:request.body.nombres,
        apellidos:request.body.apellidos,
        email:request.body.email,
        celular:request.body.celular,
        password:(request.body.password),
        confirm:(request.body.confirm),
        ciudad:request.body.ciudad
    }

    if(post.nombres == '' || post.nombres == undefined || post.nombres == null){
        response.json({state:false, mensaje:'El campo nombres es obligatorio'})
        return false
    }
    if(post.apellidos == '' || post.apellidos == undefined || post.apellidos == null){
        response.json({state:false, mensaje:'El campo apellidos es obligatorio'})
        return false
    }
    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false, mensaje:'El campo email es obligatorio'})
        return false
    }
    if(post.celular == '' || post.celular == undefined || post.celular == null){
        response.json({state:false, mensaje:'El campo celular es obligatorio'})
        return false
    }
    if(post.password == '' || post.password == undefined || post.password == null){
        response.json({state:false, mensaje:'El campo password es obligatorio'})
        return false
    }
    // if(post.confirm == '' || post.confirm == undefined || post.confirm == null){
    //     response.json({state:false, mensaje:'El campo confirmación es obligatorio'})
    //     return false
    // }
    // if(post.password != post.confirm){
    //     response.json({state:false, mensaje:'La contraseña y su confirmación no son iguales '})
    //     return false
    // }
    if(post.ciudad == '' || post.ciudad == undefined || post.ciudad == null){
        response.json({state:false, mensaje:'El campo ciudad es obligatorio'})
        return false
    }
    usuariosModel.EmailExiste(post,function(existe){
             console.log(existe.data.length)
             if(existe.data.length >= 1){
               response.json({state:false,mensaje:'el email ya existe, intente con otro'})
               return false
             }
             else{
                 usuariosModel.guardar(post,function(respuesta){
                     response.json(respuesta)
                     if(respuesta.info._id != ''){
                         response.json({state:true,mensaje:'usuario creado correctamente'})
                     }
                     else{
                         response.json({state:false, mensaje:'Error al crear usuario',info:respuesta})
                     }

                 })
             }
             response.json(existe)
        
    })

}
usuariosController.listartodos = function(request, response){
    usuariosModel.listartodos(null,function(respuesta){
        response.json(respuesta)
    })
}
usuariosController.listarId = function(request, response){
    var post={
        id:request.body.id
    }
    if(post.id == '' || post.id == undefined || post.id == null){
        response.json({state:false, mensaje:'El campo id es obligatorio'})
        return false
    }

    usuariosModel.listarId(post,function(respuesta){
        response.json(respuesta)
    })
}


module.exports.usuarios = usuariosController;