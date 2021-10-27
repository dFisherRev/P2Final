import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { BettingSectionComponent } from '../betting-section/betting-section.component';
import { PlayingSectionComponent } from '../playing-section/playing-section.component';

@Injectable({providedIn: 'root'})
export class TransferService {
  constructor(){ }

  public bet:number=0
  public temp:number = 0;
  public startDeal:boolean=false
  public bank:number=1000
  public payout:any

  
  setBet(bet:number){
    this.bet = bet;
    this.payout = this.bet * 2

   }

  getBet(){
    let temp = this.bet;
    
    
    return temp;
  }
  setBank(bank:number){
    this.bank = bank
  }

  getBank(){
    return this.bank
  }
  

  clearBet(){
    this.bet = 0;
  }
  subtractBank(num:number){
    this.bank -= num;
  }
  addBank(num:number){
    this.bank += num;
  }

}