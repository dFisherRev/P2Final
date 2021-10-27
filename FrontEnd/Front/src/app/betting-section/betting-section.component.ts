import { Component, Injectable, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransferService } from '../services/game-bet.service';

@Component({
  selector: 'app-betting-section',
  templateUrl: './betting-section.component.html',
  styleUrls: ['./betting-section.component.css'],
  //providers: [TransferService]
})
export class BettingSectionComponent implements OnInit {

  pot:number=0
  
  bank:number = 1000
  public deckID:string =''
  public playerHand:String[] =[]
  public dealerHand:string[]=[]
  public newCard:string=''
  public parsed_NewCard:string[]=[]
  public parsed_Cards:string=''
  public newCardCode:string=''
  public cardsSubCat:string[]=[]
  public cardValue:string=''
  public preDeck:boolean=false
  private cardSource =new BehaviorSubject<any>(0)
  cardView =this.cardSource.asObservable();
  public allCards:string[]=[]
  public playerSingleCard1:string=''
  public playerSingleCard2:string=''
  public playerSingleCardImage:string=''
  public item:string=''
  private url: string = "http://deckofcardsapi.com/api/deck/"
  public playerSingleCardImage2:string=''
  private readonly serverURLbase: string = "http://localhost:8090/";
  


  constructor(public transferService:TransferService) { }
  ngOnDestroy():void{
    
    console.log(this.pot)
        this.transferService.setBet(this.pot)
        //this.transferService.subtractBank(this.pot)
        
  
      }
      //console.log(fullObject)
      //return this.http.post<IGame>(this.serverURLbase +"game/start/", fullObject ) //update the post request to the back end******************************************************
  
  
  
  
  ngOnInit():void {
    
  }
  addChipsToBet(num:number){
      this.pot += num; 
      this.transferService.setBet(this.pot)
      this.transferService.subtractBank(num)
      
  }
  




    

    
  }
  
