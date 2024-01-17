import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, SignUp } from '../data-type';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  

  constructor(private http:HttpClient, private router:Router) { }
  
  userSignUp(data:SignUp){
   return this.http.post('http://localhost:3000/seller',data)
  } 
  
  // userLogin(data:login){
  //  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
  //  {observe:'response'}).subscribe((result:any)=>{
  //   console.warn(result)
  //   if(result && result.body && result.body.length===1){
  //     this.isLoginError.emit(false)
  //     localStorage.setItem('seller',JSON.stringify(result.body))
  //     this.router.navigate(['seller-home'])
  //   }else{
  //     console.warn("login failed");
  //     this.isLoginError.emit(true)
  //   }
  //  })
  // }
}