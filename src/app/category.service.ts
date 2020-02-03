import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
      return this.db.list('/categories').snapshotChanges().pipe(
          map(category => {
              return category.map( a => {
                  const name = a.payload.toJSON();
                  const key = a.key;
                  return  { key, name} ;
              });
          }),
      );
  }
}
