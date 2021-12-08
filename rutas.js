console.log('el archivo de rutas')

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Admin
var admin = require(appRoot +
  "/api/controladores/adminController.js").admin;

  app.post("/admin/guardar", function (request, response) {
    admin.guardar(request, response);
  });
  app.post("/admin/listar", function (request, response) {
    admin.listar(request, response);
  });
  app.post("/admin/eliminar", function (request, response) {
    admin.eliminar(request, response);
  });
  app.post("/admin/actualizar", function (request, response) {
    admin.actualizar(request, response);
  });
  app.post("/admin/listarId", function (request, response) {
  admin.listarId(request, response);
  });

  //medico
var medico = require(appRoot +
    "/api/controladores/medicoController.js").medico;
  
    app.post("/medico/guardar", function (request, response) {
      medico.guardar(request, response);
    });
    app.post("/medico/listar", function (request, response) {
      medico.listar(request, response);
    });
    app.post("/medico/eliminar", function (request, response) {
      medico.eliminar(request, response);
    });
    app.post("/medico/actualizar", function (request, response) {
      medico.actualizar(request, response);
    });
    app.post("/medico/listarId", function (request, response) {
    medico.listarId(request, response);
    });

//paciente
var paciente = require(appRoot +
    "/api/controladores/pacienteController.js").paciente;
  
    app.post("/paciente/guardar", function (request, response) {
      paciente.guardar(request, response);
    });
    app.post("/paciente/listar", function (request, response) {
      paciente.listar(request, response);
    });
    app.post("/paciente/eliminar", function (request, response) {
      paciente.eliminar(request, response);
    });
    app.post("/paciente/actualizar", function (request, response) {
      paciente.actualizar(request, response);
    });
    app.post("/paciente/listarId", function (request, response) {
    paciente.listarId(request, response);
    });

    //cita
var cita = require(appRoot +
  "/api/controladores/citaController.js").cita;

  app.post("/cita/guardar", function (request, response) {
    cita.guardar(request, response);
  });
  app.post("/cita/listar", function (request, response) {
    cita.listar(request, response);
  });
  app.post("/cita/eliminar", function (request, response) {
    cita.eliminar(request, response);
  });
  app.post("/cita/actualizar", function (request, response) {
    cita.actualizar(request, response);
  });
  app.post("/cita/listarId", function (request, response) {
  cita.listarId(request, response);
  });
