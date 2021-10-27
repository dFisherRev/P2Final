import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeckService } from '../deck.service';
import { Emitters } from '../emitters';

@Component({
  selector: 'app-pregame-view',
  templateUrl: './pregame-view.component.html',
  styleUrls: ['./pregame-view.component.css']
})
export class PregameViewComponent implements OnInit {
  authenticated = false;
  message = 'Must Login to play';
  
  y = false;

  constructor(
    private deckService:DeckService,
    private router:Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    Emitters.authEmmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth
      }
    )
  }

  start(){
    if (localStorage.id_token){
      this.router.navigate(['/gameplay'])
    } else {
      this.y = true;
      console.log("get local token failed");
    }
  }

}
