import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }

  public mensajes:any[]=[]

  public crearmensaje(mensaje:string){
    this.mensajes.push(mensaje)
  }
  private borrar(){
    setTimeout(() =>{
      if(this.mensajes.length > 0){
        this.mensajes.splice(0,1)
      }
    },5000);
  }
  public load(mensaje:string){
    this.mensajes.push({msg:mensaje})
    this.borrar()
  }
}
