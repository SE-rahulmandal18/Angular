import { Product } from './../classes/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: Product = new Product('', 0, '', true, true);

  OnSubmit(): void {
    console.log(`Form submitted ${this.product.name}, ${this.product.price}`)
  }

}
