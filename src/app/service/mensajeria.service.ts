import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }

  public mensajes:any[]=[]

  public crearmensaje(mensaje:string){
    this.mensajes.push(mensaje)
<<<<<<< HEAD
  }
  private borrar(){
=======

>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919
    setTimeout(() =>{
      if(this.mensajes.length > 0){
        this.mensajes.splice(0,1)
      }
    },5000);
  }
<<<<<<< HEAD
  public load(mensaje:string){
    this.mensajes.push({msg:mensaje})
    this.borrar()
  }
=======
>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919
}
