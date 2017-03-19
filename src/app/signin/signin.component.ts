import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../service/index';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    loading = false;
    returnUrl: string;
    user: any = {};

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    CheckLogin() {
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
            data => {
                this.router.navigate(['home']);
            },
            error => {
                this.alertService.error(error._body);
                this.alertService.getMessage();
                this.loading = false;
            });
    }
}
