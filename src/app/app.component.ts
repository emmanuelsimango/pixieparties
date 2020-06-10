import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService, private auth: AuthService, router: Router) {
        this.auth.user$.subscribe(user => {
            if (!user) { return; }
            userService.save(user);
            const returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl) { return; }
            router.navigateByUrl(returnUrl);
            localStorage.removeItem('returnUrl');


        });
    }
    ngOnInit(): void {
        AOS.init();
    }

    title = 'Pixie Parties';
}
