import { Component, OnInit } from '@angular/core';
import { SignUp, login } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
 
  
  constructor(private seller: SellerService,private route:Router) {}

  ngOnInit(): void {
 console.log("bjbgjbhjhb");
 
  }
  signUp(data: SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.route.navigate(['seller-home'])
      }
    });
  }
 
login(data:login){
  console.log(data)
}

  showLogin=false;
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}