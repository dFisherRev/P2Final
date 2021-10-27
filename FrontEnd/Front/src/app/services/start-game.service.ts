import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class StartGameService {
  constructor(private router:Router){ }

  public bet:number = 0
  public temp:number = 0;
  

  setBet(bet:number){
    this.bet = bet;
   }

  getBet(){
    let temp = this.bet;
    this.clearBet();
    return temp;
  }

  clearBet(){
    this.bet = 0;
  }

}