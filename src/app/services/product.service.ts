import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private db: AngularFireDatabase) { }
    create(product) {
        this.db.list('/products').push(product);
    }

    getAll(){
        return this.db.list('/products').snapshotChanges().pipe(
            map(prod => {
                return prod.map( a => {
                    const data = a.payload.toJSON();
                    const key = a.key;
                    // tslint:disable-next-line: prefer-const
                    let product: Product;
                    product.key = key;
                    product.title = data.title;
                    product.price = data.price;
                    product.category = data.category;
                    product.imageUrl = data.imageUrl;
                    // return  { key, data} ;
                    return  product ;
                });
            })
            );
    }

    get(productId) {
        return this.db.object('/products/' + productId).valueChanges();
    }

    update(productId, product) {
       return this.db.object('/products/' + productId).update(product);
    }

    delete(productID){
        return this.db.object('products/' + productID).remove();
    }
}
