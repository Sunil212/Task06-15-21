import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  __productService:ProductsService;
  unitsInCart:number = 0;

  constructor(ps:ProductsService) 
  {
    this.__productService = ps;
   }

  ngOnInit(): void {
  }

  getAllProducts(): ProductDetails[]
  {
    return this.__productService.getAllProducts();
  }

  addToCart()
  {
    this.unitsInCart++;
    console.log(this.unitsInCart);
  }
  getRating(n: number): Array<number>{
    return Array(n);
  }

  doShare(){
    console.log("shared");
    alert("shared");
  }
}
