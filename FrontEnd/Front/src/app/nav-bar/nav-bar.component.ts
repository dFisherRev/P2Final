import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapsed: boolean =true;
  authenticated = false; 
  
  message = '(Please Login to play)';
  message2 = 'Welcome Click Start to play';
  constructor(
    private http: HttpClient,
    private router:Router
  ) { 
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  
  ngOnInit(): void {
    Emitters.authEmmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth
      }
    )
    
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.router.navigate(['/'])
    this.authenticated = false
    console.log("user logged out. auth removed.");
  }

}
