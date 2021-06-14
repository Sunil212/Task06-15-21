import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  imageRootPath:string = 'assets/productimages/';

  // include code to hit springboot endpoints {}
  getAllProducts():ProductDetails[]
  {
    let spectacles1 : ProductDetails = {
      productName : 'Spectacle 1',
      productCost : 7500,
      rating:4,
      description:'Model A33',
      imageName:'assets/productimages/spectacle1.jpg'
    }

    let spectacles2 : ProductDetails = {
      productName : 'Spectacle 2',
      productCost : 5600,
      rating:3,
      description:'Model S23',
      imageName:this.imageRootPath+'spectacle2.jpg'
    }

    let spectacles3 : ProductDetails = {
      productName : 'Spectacle 3',
      productCost : 5000,
      rating:4,
      description:'Model A21',
      imageName:this.imageRootPath+'spectacle3.jpg'
    }

    let spectacles4 : ProductDetails = {
      productName : 'Spectacle 4',
      productCost : 6500,
      rating:4,
      description:'Model F33',
      imageName:this.imageRootPath+'spectacle4.jpg'
    }

    
    return [spectacles1,spectacles2,spectacles3,spectacles4];
  }//end of getAll Products from Server
}
