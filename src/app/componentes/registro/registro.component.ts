import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/service/mensajeria.service';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private peticion:PeticionService, private mensaje:MensajeriaService) { }

  ngOnInit(): void {
  }
  registro:any = {
    nombres:"",
    apellidos:"",
    email:"",
    password:"",
    confirm:"",
    celular:"",
    ciudad:"",
    }
    registrarusuario(datos:any):boolean{
      console.log(datos)
  
      if(datos.nombres == '' || datos.nombres == null || datos.nombres == undefined){
      this.mensaje.load('los nombres son obligatorio')
      return false;
    }
    if(datos.apellidos == '' || datos.apellidos == null || datos.apellidos == undefined){
      this.mensaje.load('los apellidos son obligatorio')
      return false;
    }
    if(datos.email == '' || datos.email == null || datos.email == undefined){
      this.mensaje.load('el email es obligatorio')
      return false;
    }
    if(datos.password == '' || datos.password == null || datos.password == undefined){
      this.mensaje.load('el password es obligatorio')
      return false;
    }
    if(datos.confirm == '' || datos.confirm == null || datos.confirm == undefined){
      this.mensaje.load('la confirmación es obligatorio')
      return false;
    }
    if(datos.password != datos.confirm){
      this.mensaje.load('la contraseña no coincide con la confirmación')
      return false;
    }
    if(datos.celular == '' || datos.celular == null || datos.celular == undefined){
      this.mensaje.load('el celular es obligatorio')
      return false;
    }
    if(datos.ciudad == '' || datos.ciudad == null || datos.ciudad == undefined){
      this.mensaje.load('la ciudad es obligatorio')
      return false;
    }
    

    var post={
      host:this.peticion.urlLocal,
      path:'/usuarios/registro',
      data:{
        nombre:datos.nombre,
        apellidos:datos.apellido,
        email:datos.email,
        password:datos.password,
        confirmacion:datos.confirmacion,
        celular:datos.celular,
        ciudad:datos.ciudad
      }
    }
     this.peticion.Post(post.host + post.path, post.data).then(
       (res:any) =>{
         this.mensaje.load(res.mensaje)
       })


      return true;
    
    
  }

}
