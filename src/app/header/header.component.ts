import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private _product:ProductService,private _route:Router){}



searchitem:undefined|product[]

  searchProduct(query:KeyboardEvent){
if(query){
  const element=query.target as HTMLInputElement;
 this._product.searchProducts(element.value).subscribe((result)=>{
  console.log(result);
  this.searchitem=result
 })
  
}
  }


  submitSearch(val:string){

this._route.navigate([`search/${val}`])

  }
}
