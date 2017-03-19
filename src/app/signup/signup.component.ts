import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/index';
import { AlertService } from '../service/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: any;
  constructor(private router: Router, public userService: UserService, private alertService: AlertService) {

  }

  ngOnInit() {
    this.user = {}
  }
  GoToLogin() {
    this.router.navigate(['']);
  }
  SaveForm() {
    this.userService.Add(this.user).subscribe(
      data => {
        alert('Registration successful')
        // this.alertService.success('Registration successful', true);
        this.GoToLogin();
      },
      error => {
        // this.alertService.error(error);
        alert('Registration error')
      })
  }
}
