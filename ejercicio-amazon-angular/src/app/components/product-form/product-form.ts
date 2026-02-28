import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsSevice } from '../../service/products.sevice';
import { inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productService = inject(ProductsSevice);

  // 2. Variables para el formulario (Two-way binding)
  newProduct: IProduct = {
    id: 0,
    title: "",
    price: 0,
    quantity: 0
  }; 

  // 3. Método para agregar un nuevo producto
  addProduct() {
    if (this.newProduct.title !=="" && this.newProduct.price !== 0 && this.newProduct.quantity !== 0) {
      const response = this.productService.insertProduct(this.newProduct);
      
      this.newProduct = {title: "",price: 0,quantity: 0};

      console.log('Producto agregado:', response);
      console.log('Lista actualizada de productos:', this.productService.getAllProducts());
      alert(response);
    } else{
      alert("Por favor, complete todos los campos del formulario.");
    }
  }; 


}