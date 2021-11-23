import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/service/mensajeria.service';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor(private mensajeria:MensajeriaService, public peticion:PeticionService) { }

  ngOnInit(): void {
  }
  nombre:string=''
  email:string=''
  telefono:string=''
  descripcion:string=''
}
