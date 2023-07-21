import { Injectable } from '@angular/core';
import { Product } from './classes/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backEndUrl ='http://localhost:8080/product';

  constructor(private http: HttpClient) { }
  
  //APIs
  getAllProducts(): Product[] {

    return [
      new Product("Macbook", 60000, "assets/images/mac.jpg", true, true),
      new Product("Keyboard", 560, "assets/images/keyboard.jpg", false, true),
      new Product("Mouse", 600, '', false, false),
      new Product("Monitor", 20000, '', true, false),
    ];
  }


  getAllProductsFromBackend(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.backEndUrl}/list`);
  }

  getProduct(prodNum: number = 0): Product {

    return new Product("Macbook", 60000, "assets/images/mac.jpg", true, true);
  }

  getProductFromBackend(id: number): Observable<Product> {
     return this.http.get<Product>(`${this.backEndUrl}/details/${id}`);
  }

  addProductToBackEnd(name: string, price: number): Observable<Product> {
    return this.http.post<Product>(`${this.backEndUrl}/add`,
      {
        "name": name,
        "price": price,
      }
    );
  }

}
