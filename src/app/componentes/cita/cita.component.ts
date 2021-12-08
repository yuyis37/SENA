import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/cita.service';
import { MensajeriaService } from 'src/app/service/mensajeria.service';
import { PeticionService } from 'src/app/service/peticion.service';

<<<<<<< HEAD

=======
>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919
@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  constructor(private peticion:PeticionService, private mensaje:MensajeriaService, public citas:CitaService) { }

  ngOnInit(): void {
  }
  id:string="";
  nombre:string='';
  //destino:string="/paciente";
  identificacion:string='';
  telefono:string='';
  dia:string = '';
  hora:string='';
  
  datoscita:any[]=[]

  Nuevo(){
    this.id='';
    this.nombre='';
    //this.destino='';
    this.identificacion='';
    this.telefono='';
    this.dia='';
    this.hora='';
  }


  Cargardatos(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/cita/listar',
      data:{ }
    }
    this.peticion.Post(post.host + post.path, post.data).then(
      (res:any)=>{
        console.log(res)
        this.datoscita = res
  })
 }
 Guardar(){
  var post = {
    host:this.peticion.urlLocal,
    path: '/cita/guardar',
    data:{
      nombre:this.nombre,
      identificacion:this.identificacion,
<<<<<<< HEAD
      telefono:this.telefono,
      dia:this.dia,
      hora:this.hora
=======
      email:this.telefono,
      direccion:this.dia,
      telefono:this.hora
>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919
    }
  }
  this.peticion.Post(post.host + post.path, post.data).then((res:any) =>{
     
    if(res.state == true){
    this.mensaje.crearmensaje('Cita Agendada Correctamente')
     this.nombre="";
     this.identificacion='';
     this.telefono="";
     this.dia="";
     this.hora=""
     this.Cargardatos()
    }
  }) 
  
}
  consultaridentificacion(tipo:string,nombre:string){
    var post={
      host:this.peticion.urlLocal,
      url:'/' + tipo + "/listaridentificacion" ,
      data:{
        nombre:nombre
       
      }
    }
    this.peticion.Post(post.host + post.url , post.data).then(
      (res:any) => {
        console.log(res)
        this.id=res[0]._id;
        this.nombre=res[0].nombre;
        this.identificacion= res[0].identificacion;
        this.telefono=res[0].telefono;
        this.dia=res[0].dia;
        this.hora=res[0].hora;
 
      })
      
   }


EliminarRegistro(identificador:string){
    var post = {
      host:this.peticion.urlLocal,
      path: '/cita/eliminar',
      data:{
        id:identificador
      }
    }
    this.peticion.Post(post.host + post.path, post.data).then(
      (res:any) =>{
        console.log(res)
        if(res.state == true){
          this.mensaje.crearmensaje(res.mensaje)
          
          this.Cargardatos()
        }
      }
    )
 }
EditarDatos(identificador:string){
  this.id = identificador
  var post={
    host:this.peticion.urlLocal,
    path:  '/cita/listarId',
    data:{
      id:identificador
    }
  }
 
  this.peticion.Post(post.host + post.path , post.data).then(
    (res:any) => {
      console.log(res)

      this.nombre = res[0].nombre
      this.identificacion = res[0].identificacion
      this.telefono = res[0].telefono
      this.dia = res[0].dia
      this.hora = res[0].hora
      
      this.mensaje.crearmensaje('Cita Actualizada Correctamente')
      this.Cargardatos()
    })
     
  }
modificar(){
    var post={
      host:this.peticion.urlLocal,
      path:  '/cita/actualizar',
      data:{
        id:this.id,
        nombre:this.nombre,
        identificacion:this.identificacion,
        telefono:this.telefono,
        dia:this.dia,
        hora:this.hora
      }
    }
   
    this.peticion.Post(post.host + post.path , post.data).then(
      (res:any) => {
        console.log(res)
        this.Cargardatos()
  
  })

}
  }

