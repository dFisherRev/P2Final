import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit(): void {
    let account = this.getAcctInfo();

    this.form = this.formBuilder.group({
      name:account.name,
      password:account.password,
      address:account.address,
      city:account.city,
      state:account.state,
      zipcode:account.zipcode,
      creditcard:account.cardnumber,
      expirationdate:account.expirationdate,
      securitycode:account.securitycode,
      dob:account.DOB,
      email:account.email,
    })
  }

  submit(): void {
    const http = new XMLHttpRequest();
    let prePackage = this.form.getRawValue();
    prePackage.JWT = localStorage.getItem('id_token');
    let packageToSend = JSON.stringify(prePackage);
    http.open("POST", "http://localhost:8090//user/get");
    http.send(packageToSend);
    http.onreadystatechange = () => {
      if(http.readyState==4 && http.status==200){
        console.log("update account post status: " + http.status);
      }
      else{
        console.log("update account post failed with status: "  + http.status);
      }
    }
    this.router.navigate(['/acctView']);
  }

  getAcctInfo():any{
    let response:any = null;
    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:8090//user/update");
    http.send(localStorage.getItem('id_token'));
    http.onreadystatechange = () => {
      if(http.readyState==4 && http.status==200){
      let responseJSON = http.responseText;
      response = JSON.parse(responseJSON);
      console.log("get account information successful");
      } else {
        console.log("update account initial field population failed with status: " + http.status);
      }
    }
     return response;
  }

  back():void{
    this.router.navigate(['/account']);
  }
}
