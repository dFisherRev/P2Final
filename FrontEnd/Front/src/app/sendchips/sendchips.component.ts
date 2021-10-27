import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendchips',
  templateUrl: './sendchips.component.html',
  styleUrls: ['./sendchips.component.css']
})
export class SendchipsComponent implements OnInit {
  form!: FormGroup;
  disp = false;
  message = ''
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:localStorage.getItem('username'),
      username:'',
      chipCount:0
    })
  }

  submit() {
    this.http.post('http://localhost:8090/user/chips', this.form.getRawValue(), {responseType:'text'}
  ).subscribe(res => this.transactionCheck(res));
  }

  transactionCheck(amountSent:string) {
    this.disp = true;
    this.message = amountSent
    console.log('transaction complete')
  }

}
