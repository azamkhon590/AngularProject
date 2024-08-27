import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { ProductItem } from '../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edit-product',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) { }

  productDetail: ProductItem = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.productService.getProduct(id)
            .subscribe({
              next: (response) => {
                this.productDetail = response;
              }
            });
        }
      }
    });
  }
  updateProduct() {
    this.productService.updateProduct(this.productDetail.id, this.productDetail)
      .subscribe({
        next: (response) => {
          this.router.navigate(['product']);
        }
      });
  }
  deleteProduct(id: string){
    this.productService.deleteProduct(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['product']);
        }
      });
  }
}
