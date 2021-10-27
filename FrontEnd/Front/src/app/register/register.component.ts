import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card/card.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:'',
      username:'',
      password:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
      cardnumber:'',
      expirationdate:'',
      securitycode:'',
      dob:''
    })
  }

  submit(): void {
    this.http.post('http://localhost:8090/user/register', this.form.getRawValue(),{responseType: 'text'}
    ).subscribe(() => this.router.navigate(['/login']));
  }
}
