import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  private host = "http://localhost:4000";
  private getlistApi = this.host + "/users";
  private registerApi =this.host +  "/users/register";

  constructor(private _http: Http) { }
  //Sign In
  Getlist(): Observable<any[]> {
    let _currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let _token = _currentUser.token;
    let _headers = new Headers();
    // append Headers
    _headers.append('Authorization', 'Bearer ' + _token);
    //lấy dữ liệu từ API "map" sang json và gán vào biến "response" có kiểu là "Response"
    return this._http.get(this.getlistApi, { headers: _headers }).map((response: Response) => response.json())
  }

  //Sign Up
  Add(data: any): Observable<any> {
    return this._http.post(this.registerApi, data)
      .map((response: Response) => response.json())

  }
}
