import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

<<<<<<< HEAD
  constructor(private http:HttpClient, private router:Router) { }
=======
  constructor(private http:HttpClient) { }
>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919
  public Post(url:any,data:{}){

    let promise = new Promise((resolve,reject) =>{

      this.http.post(url,data)
      .toPromise()
      .then(
        (res:any) => {
<<<<<<< HEAD
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
=======
          resolve(res)
        }
      )
    })
>>>>>>> d6553b35989f17aa838fb7f6acd19801ab119919
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
