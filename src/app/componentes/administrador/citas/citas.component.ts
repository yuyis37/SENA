import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';
import { MensajeriaService } from 'src/app/service/mensajeria.service';
import { PeticionService } from 'src/app/service/peticion.service';
 
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private peticion:PeticionService, private actrouter:ActivatedRoute, public citas:CitaService, private mensaje:MensajeriaService) { }

  ngOnInit(): void {
    
  }
  id:string="";
  nombre:string='';
  destino:string="/paciente";
  identificacion:string='';
  email:string='';
  direccion:string = '';
  telefono:string='';
  
  datosadmin:any[]=[]

  Nuevo(){
    this.id='';
    this.nombre='';
    this.destino='';
    this.identificacion='';
    this.email='';
    this.direccion='';
    this.telefono='';
  }


  Cargardatos(){
    var post = {
      host:this.peticion.urlLocal,
      path:this.destino + '/listar',
      data:{ }
    }
    this.peticion.Post(post.host + post.path, post.data).then(
      (res:any)=>{
        console.log(res)
        this.datosadmin = res
  })
 }
 Guardar(){
  var post = {
    host:this.peticion.urlLocal,
    path: this.destino + '/guardar',
    data:{
      nombre:this.nombre,
      identificacion:this.identificacion,
      email:this.email,
      direccion:this.direccion,
      telefono:this.telefono
    }
  }
  this.peticion.Post(post.host + post.path, post.data).then((res:any) =>{
     
    if(res.state == true){
    this.mensaje.crearmensaje('Producto Guardado Correctamente')
     this.nombre="";
     this.identificacion='';
     this.email="";
     this.direccion="";
     this.telefono=""
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
        this.email=res[0].email;
        this.direccion=res[0].direccion;
        this.telefono=res[0].telefono;
 
      })
      
   }
  //  agregarcita(){
  //    this.citas.agregarcita(this.id, this.nombre, this.identificacion,this.email, this.direccion, this.telefono)
  //  }

EliminarRegistro(identificador:string){
    var post = {
      host:this.peticion.urlLocal,
      path: this.destino +'/eliminar',
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
    path: this.destino + '/listarId',
    data:{
      id:identificador
    }
  }
 
  this.peticion.Post(post.host + post.path , post.data).then(
    (res:any) => {
      console.log(res)

      this.nombre = res[0].nombre
      this.identificacion = res[0].identificacion
      this.email = res[0].email
      this.direccion = res[0].direccion
      this.telefono = res[0].telefono
      
      this.mensaje.crearmensaje('Producto Actualizado Correctamente')
      this.Cargardatos()
    })
     
  }
modificar(){
    var post={
      host:this.peticion.urlLocal,
      path: this.destino + '/actualizar',
      data:{
        id:this.id,
        nombre:this.nombre,
        identificacion:this.identificacion,
        email:this.email,
        direccion:this.direccion,
        telefono:this.telefono
      }
    }
   
    this.peticion.Post(post.host + post.path , post.data).then(
      (res:any) => {
        console.log(res)
        this.Cargardatos()
  
  })

}
  }

