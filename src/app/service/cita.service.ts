import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  local: any = "";
 public citas:any[]=[]
  constructor() { }

  public agregarcita(id:string, nombre:string, identificacion:string, direccion:string, telefono:string){
  var posicion = this.citas.findIndex((elemento)=>(elemento.id == id && elemento.nombre == nombre))
  if(posicion == -1){
    this.citas.push({id:id, nombre:nombre, identificacion:identificacion, direccion:direccion, telefono:telefono})
    console.log(this.citas)
  } 
  else{
    console.log(this.citas)
  }
  console.log(this.citas)
  localStorage.setItem('citas', JSON.stringify(this.citas))
  }

  cargardatos(){
    this.local = localStorage.getItem('citas')
    console.log(this.local)
    if(this.local == null || this.local == undefined){
      this.citas = [];
    }
    else{
      this.citas = JSON.parse(this.local)
    }
  }
  quitarcita(id:string, nombre:string){
    var posicion = this.citas.findIndex((elemento)=>(elemento.id == id && elemento.nombre == nombre))
    this.citas.splice(posicion, 1)
    localStorage.setItem('citas', JSON.stringify(this.citas))
  }
}
