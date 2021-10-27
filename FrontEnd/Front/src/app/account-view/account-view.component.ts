import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  
  name = ''
  username = ''
  chips = 10
  public user!: IUser; 
  constructor(
    private http:HttpClient,
    private userService:UserService
  ) { 
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(data => this.accountView(data))
  }

  accountView(userInfo:IUser){
    this.name = userInfo.name
    this.username = userInfo.username
    this.chips = userInfo.chipCount
    
  }
}
