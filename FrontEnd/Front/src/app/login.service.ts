import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private _url: string = "/localhost/8090/login...???";
  
  login(username:string, password:string){
   //return this.http.post<User>('localhost:8090/login', {username, password})

  }
}
