import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';
import { PRODUCTS } from '../db/products.db';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products:IProduct[] = PRODUCTS;

  getAllProducts(): IProduct[] {
    return this.products;
  }


  insertProduct(newProduct: IProduct): string {
     this.products.push(newProduct);
      return 'Producto agregado correctamente';
  }; 

  calculateTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
  ; 

}
