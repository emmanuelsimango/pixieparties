import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private db: AngularFireDatabase) { }
    create(product) {
        this.db.list('/products').push(product);
    }

    getAll() {
        return this.db.list('/products').snapshotChanges().pipe(
            map(prod => {
                return prod.map( a => {
                    const data = a.payload.toJSON();
                    const key = a.key;
                    return  { key, data} ;
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
}
