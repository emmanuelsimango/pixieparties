import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private userService: UserService) {
        this.user$ = afAuth.authState;
    }

    login() {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(
            new firebase.auth.GoogleAuthProvider()
        );
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    get appUser$(): Observable<AppUser> {
        return this.user$.pipe(
            switchMap(
                user => this.userService.get(user.uid).valueChanges()
            ));
    }

}
