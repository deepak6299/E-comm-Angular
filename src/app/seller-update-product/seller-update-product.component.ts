import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
productData:undefined|product

constructor(private route:ActivatedRoute,private _router:Router,private product:ProductService){}
  

ngOnInit():void{
  let productId=this.route.snapshot.paramMap.get('id')
  console.log(productId)
  productId && this.product.getProduct(productId).subscribe((result)=>{
    console.log(result);
    this.productData=result
  })
}
  submit(data:product){
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        alert("Updated successfully")
      }
      if(result){
        this._router.navigate(['seller-home'])
      }

    })
    console.log(data)
    if(this.productData){
      data.id=this.productData.id
    }
  }
}
