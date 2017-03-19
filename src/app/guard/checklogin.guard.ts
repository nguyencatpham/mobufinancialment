import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';


@Injectable()

export class CheckLoginGuard implements CanActivate{
    constructor(private loginService: LoginService){
        
    }
    // đã login rồi thì cho sử dụng
    canActivate(){   
        let status = this.loginService.IsLogged();
        if(status == false){
            alert('you do not access, you should login before');
        }
        return status;
    }
}