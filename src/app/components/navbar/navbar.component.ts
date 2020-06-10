import { AppUser } from './../../models/app-user';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    appUser: AppUser;
    constructor(private auth: AuthService) {
        auth.appUser$.subscribe(appUser => this.appUser = appUser);


        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.querySelector('.navbar').classList.add('nav-bg');
                document.querySelector('.navbar img').classList.add('img-small');
                document.querySelector('.navbar-brand').classList.add('bg-light');
            } else {
                document.querySelector('.navbar').classList.remove('nav-bg');
                document.querySelector('.navbar img').classList.remove('img-small');
                document.querySelector('.navbar-brand').classList.remove('bg-light');
                // document.querySelector("#logo").classList.add("display-40");
            }

        }
    }

    ngOnInit() {
    }

    logout() {
        this.auth.logout();
    }


}
