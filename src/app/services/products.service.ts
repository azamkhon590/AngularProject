import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>('https://localhost:7107/api/product');
  }
  addProduct(addProductsItem: ProductItem) : Observable<ProductItem>{
    addProductsItem.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<ProductItem>('https://localhost:7107/api/product', addProductsItem);
  }
  getProduct(id: string) : Observable<ProductItem>{
    return this.http.get<ProductItem>('https://localhost:7107/api/product/' + id);
  }
  updateProduct(id: string, updateProduct: ProductItem) : Observable<ProductItem>{
    return this.http.put<ProductItem>('https://localhost:7107/api/product/' + id, updateProduct);
  }
  deleteProduct(id: string) : Observable<ProductItem>{
    return this.http.delete<ProductItem>('https://localhost:7107/api/product/' + id);
  }
}

