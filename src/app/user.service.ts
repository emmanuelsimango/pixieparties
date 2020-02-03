import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email,
    } );
  }

  get(uid: string): AngularFireObject <AppUser> {
      return this.db.object('/users/' + uid);
  }
}
