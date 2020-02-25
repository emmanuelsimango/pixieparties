import { Subscription } from 'rxjs';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

    $categories;
    products: Product[];
    subscription: Subscription;
  constructor(
      categoryService: CategoryService,
      productService: ProductService
  ) {
      this.$categories = categoryService.getCategories();
      this.subscription = productService.getAll().subscribe(products => this.products = products);
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}
