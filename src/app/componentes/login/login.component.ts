import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioservicio:UsuarioService) { }

  ngOnInit(): void {
  }
  email:string= '';
  password:string='';


  iniciarsesion(){

    // if(datos.email == '' || datos.email == null || datos.email == undefined){
    //   console.log('el email es obligatorio')
    //   return false;
    // }
    // if(datos.password == '' || datos.password == null || datos.password == undefined){
    //   console.log('el password es obligatorio')
    //   return false;
    // }
    console.log(this.email)
    console.log(this.password)
    this.usuarioservicio.estadoLogueado = true
  }
}
