import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public listuser: any[];
  constructor(private userService : UserService) { }

  ngOnInit() {
      this.LoadData();
  }
  LoadData(){
    this.userService.Getlist().subscribe((response: any)=>{
      this.listuser = response;
    })
  }
}
