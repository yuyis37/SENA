import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http:HttpClient, private router:Router) { }
  public Post(url:any,data:{}){

    let promise = new Promise((resolve,reject) =>{

      this.http.post(url,data)
      .toPromise()
      .then(
        (res:any) => {
          resolve(res);
          if(res.redirecionar == 'Login'){
            localStorage.removeItem('nombre')
            localStorage.removeItem('datosusuarios')
            this.router.navigate(['/cuenta']);
          }
          resolve(res);
        }
      );
    });
    return promise

  }
  public Get(url:any){

    let promise = new Promise((resolve,reject) =>{

      this.http.get(url)
      .toPromise()
      .then(
        (res:any) => {
          resolve(res)
        }
      )
    })
    return promise
  }

  public urlLocal:string = 'http://localhost:3000'
}
