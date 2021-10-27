import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
import { IPilesList } from './pilesList';
import { IPilesListDealer } from './pilesListDealer';
import { AddCardResponse } from './addCardResponse';
import { IGame } from './game';
import { Observable } from 'rxjs';
*/
@Injectable({
  providedIn: 'root'
})
  /*sendPile(newPile: Observable<IPilesList>, arg1: boolean) {
/*
  sendPile(newPile: Observable<IPilesList>, arg1: boolean) {
    throw new Error('Method not implemented.');
  }*/
export class PileService {

  private readonly apiURLbase: string = "http://deckofcardsapi.com/api/deck/";
  private readonly serverURLbase: string = "http://localhost:8090";

  constructor(private http: HttpClient) {

   }
/*
  getPlayerPile(deck_id: string):Observable<IPilesList>{
    return this.http.get<IPilesList>(this.apiURLbase 
                               + deck_id 
                               + "/pile/player/list/");
  }
*/
  getPlayerPile(deck_id: string):any{
    let response = "";
    const http = new XMLHttpRequest();
    http.open("GET", this.apiURLbase + deck_id + "/pile/player/list/");
    http.send();
    http.onreadystatechange = () => {
      if(http.readyState ==4 && http.status==200){
      let responseJSON = http.responseText;
      response = JSON.parse(responseJSON);
      console.log(response)
      }else{
        console.log(http.status)
      }
    }
    console.log(http.status)
    console.log(http.readyState)
       return response;
  }
/*
  getDealerPile(deck_id: string):Observable<IPilesListDealer>{
    return this.http.get<IPilesListDealer>(this.apiURLbase 
                               + deck_id 
                               + "/pile/dealer/list/");
  }
*/
  getDealerPile(deck_id: string):any{
    let response = "";
    const http = new XMLHttpRequest();
    http.open("GET", this.apiURLbase + deck_id + "/pile/dealer/list/");
    http.send();
    http.onreadystatechange = () => {
      if(http.readyState ==4 &&http.status==200){
      let responseJSON = http.responseText;
      response = JSON.parse(responseJSON);
      console.log(response)
     }else{
       console.log(http.status)
     }
    }
      return response;
  }
/*
  addCardToPile(deck_id: string, pile_name:string, card_code:string):Observable<AddCardResponse>{
    return this.http.get<AddCardResponse>(this.apiURLbase 
                                + deck_id 
                                + "/pile/"
                                + pile_name
                                +"/add/?cards="
                                + card_code);
  }
*/
  addCardToPile(deck_id: string, pile_name:string, card_code:string):void{
    const http = new XMLHttpRequest();
    console.log(card_code+"***************")
    http.open("GET", this.apiURLbase 
                    + deck_id 
                    + "/pile/" 
                    + pile_name
                    + "/add/?cards="
                    + card_code);
    http.send();
    http.onreadystatechange = () => {
      if(http.readyState==4 && http.status ==200){
        
       
          let responseJSON = http.responseText;
      
          console.log(JSON.parse(responseJSON));
        
      
      }
    }
    
  }
/*
  sendPlayerPile(piles: IPilesList): Observable<IGame>{
    return this.http.post<IGame>(this.serverURLbase + "/game/hit/player", piles);
  }
*/
sendPile(pile:string,isPlayerPile:boolean):any{
  let response = "";
  const http = new XMLHttpRequest();
  let sendPackage = JSON.stringify(pile);
  if(isPlayerPile){
    http.open("POST", this.serverURLbase + "/game/hit/player");
  } else {
    http.open("POST", this.serverURLbase + "/game/hit/dealer");
  } 
  http.send(sendPackage);
  http.onreadystatechange = () => {
    if(http.status==200){
    let responseJSON = http.responseText;
    response = JSON.parse(responseJSON);
    } else {
      console.log("send hit failed with status: " + http.status)
    }
  }
   return response;
}
/*
  sendDealerPile(pile: IPilesList): Observable<IGame>{
    return this.http.post<IGame>(this.serverURLbase + "/game/hit/dealer", pile);
  }
*/
}