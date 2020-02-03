import { UserService } from './user.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminAuthGaurd implements CanActivate {

    constructor(private auth: AuthService, private userService: UserService) { }

    canActivate(): Observable<boolean> {
        return this.auth.appUser$.pipe(
            map(appUser => appUser.isAdmin)
            );
    }
}
