import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable, OnInit, Output } from '@angular/core';
//import { emit } from 'process';
//import { stringify } from 'querystring';
import { Observable } from 'rxjs';
//import { runInThisContext } from 'vm';
import { theDeck } from './deck';
import { IDrawResponse } from './draw-card';
import { IGame } from './game';
import { PileService } from './pile.service';
//import { Emitters } from './emitters';
//import { EventEmitter } from 'stream';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeckService {
  //public emitter:Emitters = false
  private url: string = "http://deckofcardsapi.com/api/deck/"
  private readonly serverURLbase: string = "http://localhost:8090/";
 
  constructor(private http: HttpClient, public pileService:PileService) { }
  public deckID:string =''
  public playerHand:String[] =[]
  public dealerHand:string[]=[]
  public newCard:string=''
  public parsed_NewCard:string[]=[]
  public parsed_Cards:string=''
  public newCardCode:string=''
  public cardsSubCat:string[]=[]
  public cardValueArray:string[]=[]
  public cardValue:string=''
  public preDeck:boolean=false
  private cardSource =new BehaviorSubject<any>(0)
  cardView =this.cardSource.asObservable();
  public allCards:string[]=[]
  public playerSingleCard1:string=''
  public playerSingleCard2:string=''
  public playerSingleCardImage:string=''
  public item:string=''
  public cardValueSplit:string=''
  public cardCode:string=''
  public cardImage:string=''
  public cardImageArray:string[]=[]
  public allCardStats:any
  
  

  getCard():any{
    const Http = new XMLHttpRequest();
    Http.open("GET", this.url+ this.deckID+ "/draw/"+"?count=1");        //
    Http.send();                                                          //this function draws a new card from the deck api 
    Http.onreadystatechange = (e) => {    
      if (Http.readyState ==4 && Http.status==200){
        let newCard = (Http.responseText)                                   //
        let parsed_NewCard = JSON.parse(newCard)  
        console.log(newCard)  
        console.log(parsed_NewCard)                        //        this is to get the proper information
        let deckID= parsed_NewCard.deck_id 
        console.log(deckID)  
                                                                         //        after hittng the deal button
        this.allCardStats = parsed_NewCard.cards  //object of new card = all allCardStats
        console.log(this.allCardStats)
        this.cardValueArray = Object.values(this.allCardStats) //card by itself with cardValueArray
        console.log(this.cardValueArray)
        console.log(this.cardValue)
        console.log(this.allCardStats[0])
        this.cardValueSplit = this.cardValueArray[0]
        console.log(this.cardValueSplit)
        this.cardValue=this.allCardStats[0].value
        this.cardImage=this.allCardStats[0].image
        this.cardCode=this.allCardStats[0].code
        console.log(this.cardCode)
        console.log(this.cardValueSplit)
        this.cardImageArray.push(this.cardImage)
        console.log(this.cardImageArray)
       // console.log(this.cardImage)
       // console.log(this.cardValueArray) 
      //  console.log(this.cardValueSplit)
        //console.log(this.cardValue) 
       
      }                                //using the deck_id from the original deck
      
      
      
    }
    
  }
  /*
  changeCardList(stringArray:string[]){
    this.cardSource.next(this.playerHand)
  }
  updateCardList(item:string){
    this.changeCardList(this.playerSingleCardImage)
  }
  */








  getDeck(bet2:number){
    

    class fullObject {
        constructor (private bet:number,private playerHand:string[], private dealerHand:string[], private deck_id:string){ //object to be sent to the back end
           this.bet = bet
           this.playerHand = playerHand
           this.dealerHand = dealerHand
           this.deck_id = deck_id
        }
    }

  

    
    const Http = new XMLHttpRequest();                  //
    Http.open("GET", this.url + "new/draw/?count=4");   //  
    Http.send();                                        //  
    Http.onreadystatechange = () => {  
      if (Http.readyState ==4){               //
        let newDeck = (Http.responseText)
        console.log(newDeck)                                                   //
        let parsed_deck = JSON.parse(newDeck) //error
        console.log(parsed_deck)            //        this is to get the proper information
        let deckID= parsed_deck.deck_id                   //        after hittng the deal button
        this.allCards = parsed_deck.cards  
        console.log(this.allCards)                //
        this.playerHand = [this.allCards[0], this.allCards[2]]      //
        this.dealerHand = [this.allCards[1], this.allCards[3]] 
        let playerSingleCard = this.allCards[0]
        console.log(playerSingleCard)
        let playerSingleCardValues = Object.values(playerSingleCard)
        this.playerSingleCardImage=playerSingleCardValues[1]
        console.log(playerSingleCard)
        console.log(this.playerSingleCardImage)
        //this.playerSingleCard1 
        
          
      }
      
      

    }
    //console.log(fullObject)
    //return this.http.post<IGame>(this.serverURLbase +"game/start/", fullObject ) //update the post request to the back end******************************************************



    
    
    
    
   
  }

 


















}
