import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

searchResult:undefined|product[]

  constructor(private activeRoutr:ActivatedRoute,private _product:ProductService){}

  ngOnInit():void{
    let query=this.activeRoutr.snapshot.paramMap.get('query');
    console.log(query);
    query && this._product.searchProducts(query).subscribe((result)=>{
      this.searchResult=result
    })
    
  }

}
