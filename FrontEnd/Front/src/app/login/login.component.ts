import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Emitters } from '../emitters';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form!: FormGroup;
  dispError = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
   
    ) { 
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username:'',
      password:''
    })
  }
  

  submit() {
  this.http.post('http://localhost:8090/user/login', this.form.getRawValue(),{responseType: 'text'}
  ).subscribe(res => this.setSession(res),err => this.credentialsMismatch);
  }
  
  private setSession(authResult:any) {
  localStorage.setItem('id_token', authResult);
  if (authResult){
    Emitters.authEmmitter.emit(true);
    console.log("user auth successful");
    localStorage.setItem('username', this.form.controls['username'].value)
    //localStorage.setItem('password', this.form.controls['password'].value)
    this.router.navigate(['/'])  
  } else{
    Emitters.authEmmitter.emit(false);
    console.log("user auth failed");
  }
  }
  
  credentialsMismatch(authError:Error) {
    if (authError){
    this.dispError = true
    console.log(authError);
    }
  }

}




