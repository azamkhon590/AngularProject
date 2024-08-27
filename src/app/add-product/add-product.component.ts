import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'add-product',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  
  constructor(private productService: ProductsService, private router: Router) { }

  addProducts: ProductItem = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }
  ngOnInit(): void {

  }
  addProduct() {
    this.productService.addProduct(this.addProducts)
      .subscribe({
        next: (product) => {
          this.router.navigate(['product']);
        },
        error:(res)=>{
          console.log(res);
        }
      });
  }
}


