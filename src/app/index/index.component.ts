import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
    imports: [FormsModule, FilterPipe]
})
export class IndexComponent implements OnInit {
  products: ProductItem[] = [];
  searchtext: any;
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next: (product) => {
          this.products = product;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}
