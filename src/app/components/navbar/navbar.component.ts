import { AppUser } from './../../models/app-user';
import { AuthService } from './../../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    appUser: AppUser;
    constructor(private auth: AuthService) {
        auth.appUser$.subscribe(appUser => this.appUser = appUser);
    }

    ngOnInit() {
    }

    logout() {
        this.auth.logout();
    }
}
