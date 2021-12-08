import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public usuarioservice:UsuarioService) { }

  ngOnInit(): void {
  }
  Cerrarsesion(){
    this.usuarioservice.estadoLogueado = false
  }
  mostrar:boolean = false
}
