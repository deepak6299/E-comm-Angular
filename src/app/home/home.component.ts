import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

popularProduct:undefined|product[]

  constructor(private _product:ProductService){}

  ngOnInit(){
    this._product.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularProduct=data;
    })
  }

 

}
