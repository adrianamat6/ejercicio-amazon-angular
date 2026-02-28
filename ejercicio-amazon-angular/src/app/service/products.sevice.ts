import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';
import { PRODUCTS } from '../db/products.db';
@Injectable({
  providedIn: 'root',
})
export class ProductsSevice {
  private products:IProduct[] = PRODUCTS;

  getAllProducts(): IProduct[] {
    return this.products;
  }


  insertProduct(newProduct: IProduct): string {
     this.products.push(newProduct);
      return 'Producto agregado correctamente';
  }; 

}
