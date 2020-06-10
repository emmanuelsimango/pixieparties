import { ProductService } from '../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
    products: Product[];
    filteredProducts: Product[];
    subscription: Subscription;
    constructor(private productService: ProductService) {
    //    this.productService.getAll()
       this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
    //    this.subscription = this.productService.getAll().subscribe(products => console.log(products));
    }

    filter(query: string) {
        this.filteredProducts = (query) ?
        this.products.filter( p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
