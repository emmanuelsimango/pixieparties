import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map } from 'rxjs/operators';


@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    categories$;
    product:any;
    id: string;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private productService: ProductService) {
        this.categories$ = categoryService.getCategories();

        this.id = this.route.snapshot.paramMap.get('id');
        // console.log(id)
        if (this.id) {
            this.productService.get(this.id).pipe(
                take(1),
            ).subscribe( p => {console.log(p); this.product = p ; });
        }

    }

    save(product) {
        this.id ? this.productService.update(this.id, product) : this.productService.create(product);
        this.router.navigate(['/admin-products']);
    }

    delete() {
        if (confirm('Are you sure you want to delete this product')) {
            this.productService.delete(this.id);
            this.router.navigate(['/admin-products']);
        }
    }

    ngOnInit() {
    }

}
