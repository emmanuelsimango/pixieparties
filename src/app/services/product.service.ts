import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
                    var prod: Product;
                    prod.key = key;
                    prod.title = data['title'];
                    prod.price = data['price'];
                    prod.category = data['category'];
                    prod.imageUrl = data['imageUrl'];
                    // return  { key, data} ;
                    return  prod ;
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
