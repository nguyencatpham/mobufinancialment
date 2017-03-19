import { Component } from '@angular/core';
import { UserService } from './service/user.service'; 
import { SigninComponent } from './signin/signin.component'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _isLoggedIn:boolean;
  constructor(private userService: UserService){

  }
  //biết trang thái đã login hay chua
  ngOnInit(){
   
  }
}
