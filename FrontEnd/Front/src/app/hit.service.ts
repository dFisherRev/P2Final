import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HitService {
  public displayMessage: string = ''
  public pushMessage: string = 'No one wins and you get your chips back.'
  public ddCollapse: boolean = false;
  public hitStayButtonCollapse: boolean = false;

  public item: any
  
  public gameState: any
  public freeBoolean: boolean = false

  public deckID: string = ''
  public playerHand: string[] = []
  public playerSplitHand: string[] = []
  public dealerHand: string[] = []
  public newCard: any
  public parsed_NewCard: string[] = []
  public parsed_Cards: string = ''
  public newCardCode: string = ''
  public cardsSubCat: string[] = []
  public cardValue: string = ''
  public preDeck: boolean = false
  
  
  public allCards: string[] = []
  public playerSingleCard1: string = ''
  public playerSingleCard2: string = ''
  public playerSingleCardImage: any = ''

  private url: string = "http://deckofcardsapi.com/api/deck/"
  public playerSingleCardImage2: string = ''
  public dealerSingleCard1: string = ''
  public dealerSingleCard2: string = ''
  public dealerSingleCardImage: string = ''
  public dealerSingleCardImage2: string = ''
  private readonly serverURLbase: string = "http://localhost:8090/";
  public bet:any
  public JWTToken: any = ''
  public response: any
  public allCardStats: any
  public dealermessage: string = ''
  public cardImageArray: string[] = []
  public dealerCardImageArray:string[] = []
  public cardValueArray: string[] = []
  public cardImage: string = ''
  public cardPool: string[] = []
  public mainCardPoolIndex:number =14
  public playState:number=0
  public tt:number=21
  public dealerCardImage:string=''
  public hitURL:string=this.url +'/'+ this.deckID + '/draw/?count=1'
  public dealerHitURL:string="http://localhost:8090/game/hit/dealer"
  public cardAPIReturn:any
  public playeHitUrl:string="http://localhost:8090/game/hit/player/";
  public newGameState: any
  public playerCard:any
  public newCardImg:string=''
  public newGameObject:any
  constructor() { }



async hitPlayer(deckID:string):Promise<any> {
  

   
    
    let hitURL:string=this.url +''+ deckID + '/draw/?count=1'
    let temp:any = await fetch (hitURL,{
      method: "GET", 
      credentials: 'omit'
    });
    if (temp.ok){
      let response = await temp.json()
      console.log(response)
      let newCard =response.cards
      this.newCardImg = (newCard[0].image)
      return response
    }
  /*  fetch(`${hitURL}`, { method: "GET", body: JSON.stringify(this.cardAPIReturn) })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        console.log(deckID)
        //this.playerCard = response.cards[0]
        
        this.playerHand.push((response.cards[0]))}
       )
        console.log(this.playerHand)
        //console.log(JSON.parse(this.updateBackEndInfo(this.JWTToken, this.bet, this.deckID, this.playerHand, this.dealerHand)))
       // this.newGameState=this.updateBackEndInfo(this.JWTToken, this.bet, this.deckID, this.playerHand, this.dealerHand)
        //console.log(newGameState)
        //return this.playerHand as unknown as string[]


*/

      }

  


  async updateBackEndInfo(JWTToken:string, bet:number, deck_id:string, dealerHand:any, playerHand:any): Promise<any>{
  
      let backEndInfo:any ={
        
      }
      backEndInfo.JWTToken =JWTToken
      backEndInfo.bet=bet
      backEndInfo.deck_id=deck_id
      backEndInfo.playerHand=playerHand
      backEndInfo.dealerHand=dealerHand

      console.log(backEndInfo)
    
      let temp:any = await fetch (this.playeHitUrl,{
        method: "POST",
        body: JSON.stringify(backEndInfo), 
        credentials: 'omit'
      });
      if (temp.ok){
        let response = await temp.json()
        console.log(response)
        this.newGameObject =response
        return this.newGameObject
      }

    
    
}

async hitDealer(deckID:string):Promise<any> {
  

   
    
  let hitURL:string=this.url +''+ deckID + '/draw/?count=1'
  let temp:any = await fetch (hitURL,{
    method: "GET", 
    credentials: 'omit'
  });
  if (temp.ok){
    let response = await temp.json()
    console.log(response)
    let newCard =response.cards
    this.newCardImg = (newCard[0].image)
    return response
  }


}

async updateBackEndInfoDealer(JWTToken:string, bet:number, deck_id:string, dealerHand:any, playerHand:any): Promise<any>{
  
  let backEndInfo:any ={
    
  }
  backEndInfo.JWTtoken =JWTToken
  backEndInfo.bet=bet
  backEndInfo.deck_id=deck_id
  backEndInfo.playerHand=playerHand
  backEndInfo.dealerHand=dealerHand

  console.log(backEndInfo)
  
  let temp:any = await fetch (this.dealerHitURL,{
    method: "POST",
    body: JSON.stringify(backEndInfo), 
    credentials: 'omit'
  });
  if (temp.ok){
    let response = await temp.json()
    console.log(response)
    this.newGameObject =response
    return this.newGameObject
  }



}


}  
      
      
