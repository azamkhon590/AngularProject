import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [RouterLink, FormsModule, FilterPipe]
})
export class ProductComponent implements OnInit {
  products: ProductItem[] = [];
  searchtext: any;

  constructor(private productService: ProductsService){

  }
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next:(product) => {
          this.products = product;
        },
        error: (response) =>{
          console.log(response);
        } 
      });
  }
}
