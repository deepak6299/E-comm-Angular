import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: undefined | product[];
 icon=faTrash;
 editicon=faEdit;


  constructor(private product: ProductService) {}

  ngOnInit() {
  this.pLiist();
  }

pLiist(){
  this.product.productList().subscribe((result) => {
    console.log(result);
    this.productList = result;
  });
}


  productMessages: undefined | string;
  // delete fuctionn
  deleteProduct(id: number) {
    console.log('test id', id);
    this.product.deleteproduct(id).subscribe((result) => {
      if (result) {
     alert("Product is deletd")
      }
      this.pLiist()
    });
  }
}
