import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // post method
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }

  // get method
  productList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  // delete method
  deleteproduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  // update method
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);

  }

  updateProduct(product: product) {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product);
  }


  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }


  // search API 
searchProducts(query:string){
  return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
}
}


