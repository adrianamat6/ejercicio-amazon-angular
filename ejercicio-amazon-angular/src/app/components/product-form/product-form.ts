import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsSevice } from '../../service/products.sevice';
import { inject } from '@angular/core';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productService = inject(ProductsSevice);

}
