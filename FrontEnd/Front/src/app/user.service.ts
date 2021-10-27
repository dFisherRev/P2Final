import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(): Observable<IUser>{
    return this.http.post<IUser>('http://localhost:8090/user/get', localStorage.getItem("id_token"))
  }
}
