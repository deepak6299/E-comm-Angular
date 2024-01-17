import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  constructor(private product: ProductService) {}

  submit(data: product) {
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result)
      if(result){
        alert("Product added successfully")
      }
    });
  
  }
}
