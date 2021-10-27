import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card/card.component';
import { DeckService } from '../deck.service';
import { PileService } from '../pile.service';
import { IGame } from '../../app/game'
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TransferService } from '../services/game-bet.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { HitService } from '../hit.service';

//import { callbackify } from 'util';

//import { stringify } from 'querystring';


@Component({
  selector: 'app-playing-section',
  templateUrl: './playing-section.component.html',
  styleUrls: ['./playing-section.component.css']
})
export class PlayingSectionComponent implements OnInit {
  iGame: IGame;
  public displayMessage: string = ''
  public pushMessage: string = 'No one wins and you get your chips back.'
  public ddCollapse: boolean = false;
  public hitStayButtonCollapse: boolean = false;
  public subscription: Subscription = new Subscription;
  public item: any
  
  public gameState: any
  public freeBoolean: boolean = false
  bank: number = this.transferService.bank
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
  private cardSource = new BehaviorSubject<any>(0)
  cardView = this.cardSource.asObservable();
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



 

  constructor(public cardService:CardComponent, public pileService:PileService, public deckService:DeckService, public transferService:TransferService, private router: Router, private hitService:HitService) {
    this.iGame=<IGame>{};
   }



  ngOnInit(): void {
    this.JWTToken = localStorage.getItem('id_token')
    this.bet = this.transferService.getBet()
    this.dealStart();

  }
  //this.subscription = this.deckService.cardView.subscribe(item => this.item = item)


  //this.deckService.getDeck(4)

  async dealStart() {
    console.log("Curtis")
    try {
      const Http = new XMLHttpRequest();                  //
      Http.open("GET", this.url + "new/draw/?count=16");   //  
      Http.send();                                        //  
      Http.onreadystatechange = () => {
        if (Http.readyState == 4) {
          let newDeck = (Http.responseText)
          console.log(newDeck)
          let parsed_deck = JSON.parse(newDeck)        //getting http response && parsing from JSON

          console.log(parsed_deck)
          this.deckID = parsed_deck.deck_id             //playing section deck ID

          console.log("*********" + this.deckID + "*********")                //        after hittng the deal button
          this.allCards = parsed_deck.cards                             //playing section array or card objects
          console.log(this.allCards)


          this.playerHand = [this.allCards[0], this.allCards[2]]      //putting 2 of the 4 drawn cards into a playing section array
          this.dealerHand = [this.allCards[1], this.allCards[3]]
          this.deckService.deckID = this.deckID

          for (let i = 0; i < 12; i++) {
            this.cardPool.push(this.allCards[i])
          }

          console.log(this.cardPool)
          console.log(this.playerHand)
          console.log(this.allCards[0])
          console.log(this.playerHand)



          let playerSingleCard: any = this.allCards[0]      //players first card OBJ
          console.log(playerSingleCard)
          let playerSingleCardValues = Object.values(playerSingleCard)
          console.log(playerSingleCardValues)        //value array of player 1st card OBJ
          let playerCardValue = (Object.values(playerSingleCardValues))[0]        //values of players 1st card

          console.log(playerCardValue)//code player card
          this.playerSingleCardImage = playerSingleCardValues[1]          //adding first player card img
          

          /////////////////////////////////////////////////////player 1st card/////////////////////////////////////////////

          // this.pileService.addCardToPile(this.deckID, "player",playerCardValue )//adding first player card to player pile
          console.log(playerSingleCard)
          console.log(this.playerSingleCardImage)
          let dealerSingleCard = this.allCards[3]           //dealer second card
          console.log(dealerSingleCard)
          let dealerSingleCardValues = Object.values(dealerSingleCard)          //values array of dealers second card
          let dealerCardValue = (Object.values(dealerSingleCardValues))[0]//code value of dealer 2nd card

          this.dealerSingleCardImage = dealerSingleCardValues[1]  //saving second dealer card img

          //      this.pileService.addCardToPile(this.deckID, "dealer",dealerCardValue)
          //    console.log(dealerSingleCard)
          //  console.log(this.dealerSingleCardImage)

          //          let hahahahah3 = this.pileService.getDealerPile(this.deckID)
          //         console.log(hahahahah3)

          /////////////////////////////////////////////dealers 1st card/////////////////////////////////////////////////////////////


          let playerSingleCard2 = this.allCards[2]       //players second card (JSON OBJ)
          console.log(playerSingleCard2)
          let playerSingleCardValues2 = Object.values(playerSingleCard2)      //values of players second card
          let playerCardValue2 = (Object.values(playerSingleCardValues2))[0]    //first value of the 2nd card (code)
          //code player card sent to player pile
          console.log(playerCardValue2)
          this.playerSingleCardImage2 = playerSingleCardValues2[1]              //save img url of second card
          //console.log(playerSingleCard)
          //       this.pileService.addCardToPile(this.deckID, "player",playerCardValue2)
          //this.playerSingleCard1 
          //     let hahahahah2 = this.pileService.getPlayerPile(this.deckID)
          //   console.log(hahahahah2)


          ///////////////////////////////////////////////2nd PlayerCard///////////////////////////////////////////






          //dealer deal cards
          let dealerSingleCard2 = this.allCards[1]              //dealr second card OBJ
          console.log(dealerSingleCard2)                                                                             /////dealer card 2 discrepency
          let dealerSingleCardValues2 = Object.values(dealerSingleCard2)  //value array of dealers second card
          let dealerCardValue2 = (Object.values(dealerSingleCardValues2))[0]///code of dealer 2nd card
          this.dealerSingleCardImage2 = dealerSingleCardValues2[1]          ////saving img of dealer card
          this.cardImageArray = [this.playerSingleCardImage, this.playerSingleCardImage2]
          console.log(this.cardImageArray)
          console.log("************************************************************")
          this.sendBackEndInfo()
          //this.updateView();
        }

      }
    } catch (e: any) {
    }




    //same with the dealer array
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////.////////////////////////DO NOT DELETE THE FOLLOWING BLOCK///////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let playerSingleCard: any = this.allCards[0]      //players first card OBJ
    console.log(playerSingleCard)
    let playerSingleCardValues = Object.values(playerSingleCard)
    console.log(playerSingleCardValues)        //value array of player 1st card OBJ
    let playerCardValue = (Object.values(playerSingleCardValues))[0]        //values of players 1st card

    console.log(playerCardValue)//code player card
    this.playerSingleCardImage = playerSingleCardValues[1]          //adding first player card img

    // this.pileService.addCardToPile(this.deckID, "player",playerCardValue )//adding first player card to player pile
    console.log(playerSingleCard)
    console.log(this.playerSingleCardImage)
    //let hahahahah = this.pileService.getPlayerPile(this.deckID)
    //console.log(hahahahah)


    /////////////////////////////////1st player card///////////////////////////////





    //console.log(playerSingleCard)
    // console.log(this.dealerSingleCardImage2)                         
    //this.playerSingleCard1 


    ///adding first dealr card to dealer pile
    //this.pileService.addCardToPile(this.deckID, "dealer",dealerCardValue2)
    //let hahahahah5 = this.pileService.getDealerPile(this.deckID)
    //console.log(hahahahah5)

    ////////////////////////////////////////////////////////////////////////dealer 2nd card 

    //adding second card to dealer pile
    //saving playing comp deckID to deck service deck id



    /*  Http.open("POST", this.serverURLbase + "game/start")
      Http.send()
      Http.onreadystatechange = (e) => {  
        if (Http.readyState ==4){   
          fullObject

            }
     
       let sentDealerPile=this.pileService.getDealerPile(this.deckID) //saving pile from API for dealer
 
      
         let sentPlayerPile=this.pileService.getPlayerPile(this.deckID)//saving sent player pile from API
      
      
      console.log(sentDealerPile)

      //send both piles to the back end((String JWT, int bet, String deck_id, Card[] playerHand, Card[] dealerHand))
     // this.pileService.sendPile(sentDealerPile, false)  //sending pile with update info back to API
      //this.pileService.sendPile(sentPlayerPile,true)  //sending pile back to api with updated info 
    }
    }
  }   
    
  
// getDeck(bet2:number){
  

  /*class fullObject {
      constructor (private bet:number,private playerHand:string[], private dealerHand:string[], private deck_id:string){ //object to be sent to the back end
         this.bet = bet
         this.playerHand = playerHand
         this.dealerHand = dealerHand
         this.deck_id = deck_id
      }
  }*/

  }


  //**********************************************************************end NGONINT */
  // async getCardPool(){
  // this.cardPool = await this.cardGen()
  ///}




  sendBackEndInfo(): any {
    class fullObject {
      constructor(private JWTtoken: string, private bet: number, private deck_id: string, private playerHand: string[], private dealerHand: string[]) { //object to be sent to the back end
        this.JWTtoken = JWTtoken
        this.bet = bet
        this.deck_id = deck_id
        this.playerHand = playerHand
        this.dealerHand = dealerHand

      }

    }

    let backEndInfo = new fullObject(this.JWTToken, this.bet, this.deckID, this.playerHand, this.dealerHand)
    console.log(JSON.stringify(backEndInfo))
    fetch(`${this.serverURLbase}game/start`, { method: "POST", body: JSON.stringify(backEndInfo) })
      .then(response => response.json())
      .then(response => {
        console.log("success")
        console.log(response)
        this.response = response
        console.log(this.response)
        this.gameState = this.response
        this.freeBoolean = true
        console.log(this.gameState.playerTotal)
        if (this.gameState.playerTotal > 21){
          this.playState = 2//player bust
          this.hitStayButtonCollapse = !this.hitStayButtonCollapse
          this.ddCollapse = !this.ddCollapse
        }
        if(this.gameState.playerTotal == 21){
          this.playState=3//player blackjack
          this.hitStayButtonCollapse = !this.hitStayButtonCollapse
          this.ddCollapse = !this.ddCollapse
        }
        if(this.gameState.dealerTotal >21){
          this.playState = 4 //dealer bust
          this.hitStayButtonCollapse = !this.hitStayButtonCollapse
          this.ddCollapse = !this.ddCollapse
        }
      })
      .catch(error => {
        console.log(error)

      }); 
    /*const Http = new XMLHttpRequest();

    console.log(backEndInfo)
    let newGameRequest = JSON.stringify(backEndInfo);
    Http.open("POST", this.serverURLbase + "game/start", true)
    console.log(newGameRequest)
    Http.send(newGameRequest)
    Http.onreadystatechange = (e) => {
      if (Http.readyState == 4) {

      }
    }
  }*/
  }
async dealerHit(){
  this.hitStayButtonCollapse = !this.hitStayButtonCollapse
  this.ddCollapse = true
  
  console.log(this.gameState.dealerTotal)
  console.log(this.playState)
    if (this.gameState.dealerTotal<17){
      let dealerCard =await this.hitService.hitDealer(this.deckID)
      console.log(dealerCard)
      let tempCard =Object.values(dealerCard.cards)
        let newCardAdd = tempCard[0]
        this.dealerHand.push(newCardAdd as string)
    }else{
      this.gameState.gameState=1
    }
        console.log(this.dealerHand)
        console.log(this.JWTToken)
        let newGameObject =await this.hitService.updateBackEndInfoDealer(this.JWTToken, this.bet, this.deckID, this.dealerHand, this.playerHand)
        console.log(newGameObject)
        this.gameState=newGameObject
       // this.gameState=newGameObject
        console.log(this.gameState)
    
      
    
   

    
      console.log(this.gameState + "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
      console.log(this.playState)
    //this.dealerCardImageArray
      console.log(this.dealerHand)
      console.log(this.gameState.dealerTotal)
      this.updateView()
    } 
      
    
  


  async hit() {
    

        console.log(this.playerHand)
        console.log(this.deckID)
        let newCard=await this.hitService.hitPlayer(this.deckID)
        //let playerCardImg =playerCard[0]
        let tempCard =Object.values(newCard.cards)
        let newCardAdd = tempCard[0]
        this.playerHand.push(newCardAdd as string)
        //let temp = this.hitService.playerHand[0]
        console.log(newCard)
        this.cardImageArray.push(this.hitService.newCardImg)
       // console.log(Object.values(playerCard))
        
        let newGameObject =await this.hitService.updateBackEndInfo(this.JWTToken, this.bet, this.deckID, this.dealerHand, this.playerHand)
        console.log(newGameObject)
        this.gameState=newGameObject
        //this.cardImageArray.push(playerCard.image)
        console.log(this.cardImageArray)

        console.log(this.gameState)
       // this.gameState=this.hitService.updateBackEndInfo(this.JWTToken, this.bet, this.deckID, newPlayerHand, this.dealerHand)
       // console.log(this.gameState)
      //  this.updateView()
        
      this.updateView()

      }                                //using the deck_id from the original deck
    

     
      











  //this.updateView()
  // this.pileService.addCardToPile(this.deckService.deckID, 'player', this.deckService.cardCode)
  // let newPile= this.pileService.getPlayerPile(this.deckService.deckID)
  // let updatedPile=this.pileService.sendPile(newPile, true)
  // Object.assign(this.iGame,updatedPile)







  stay(): void {
    this.gameState.isPlayersTurn = false
    console.log("player stayed")
    this.dealerHit()
    

    

  }

  /*async dd() {
    
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    console.log(this.transferService.bet)
    this.transferService.subtractBank(this.transferService.bet*=2)
    console.log(this.bank)
    console.log(this.transferService.bet + "the value being sub")
    this.bank = this.bank - (this.transferService.getBet() + this.transferService.getBet())
    this.transferService.bank = this.bank
    console.log(this.bank + "this is post sub")
    console.log(this.bank)
   
    
    this.hit();
    this.dealerHit();
    this.gameState = await this.hitService.updateBackEndInfo(this.JWTToken, this.bet, this.deckID, this.dealerHand, this.playerHand)
    this.gameState.playerHa
    console.log(this.gameState)
    
    this.updateView()
  }*/

    exitGame():void{
      //send bank to back end?
      this.router.navigate(['/']) 
    }

    restartGame():void{
      this.displayMessage=''
      this.pushMessage='No one wins and you get your chips back.'
      this.ddCollapse=false;
      this.hitStayButtonCollapse=false;

      //item:any
      //gameState:any 
      this.freeBoolean = false
      this.bank = 1000
      this.deckID=""
      this.playerHand=[]
      this.dealerHand=[]
      this.newCard=""
      this.parsed_NewCard=[]
      this.parsed_Cards=''
      this.newCardCode=''
      this.cardsSubCat=[]
      this.cardValue=''
      this.preDeck=false
      //this.cardSource.asObservable();
      this.allCards=[]
      this.playerSingleCard1=''
      this.playerSingleCard2=''
      this.playerSingleCardImage=''
      this.playerSingleCardImage=''
      this.dealerSingleCard1=''
      this.dealerSingleCard2=''
      this.dealerSingleCardImage=''
      this.dealerSingleCardImage2=''
      this.bet = 0
      this.response=null;
      this.allCardStats=null;
      this.dealermessage=''
      this.cardImageArray=[]
      this.cardValueArray=[]
      this.cardImage=''
      this.cardPool=[] 
      //here we need to toggle betting section back on,
      // but the div that the deal button is in no longer exists
    }




updateView() {
    /*playertotal
      dealertotal
      gameState(int)
      isplayersturn
      playercanDD
      playerhasblackjack
      dealerisbust
      */
    /*playertotal -> display a value (DAN MAKE THIS FIELDDD) ((done))
    Dealertotal _>(ALSO MAKE THIS FIELD) ((done))
    gamestate - 0 -on going   ---when game state is !0 the exit button is visable 
             - 1 - player wins (display win message !!not including blackjack!!)
             - 2 - player lose by busting (display bust message)                         add play again button on endgame screen 
             - 3 - deal wins by higher total (normal loss screen !!need blackjack!!
             - 4 - push (push with small explination of what a push is)
               when GS is not 0 the dealer stops drawing
     isplayers turn = true (all buttons visible && game state is 0, vanish when false)
                     = flase && gamestate is 0 (dealer drawns card)
     --when game is done is players turn stays flase
   playercanDD = true (button shows)
   playerHasBlackJack = true (message displayed)
   dealerBust = true (bust message is shown)*/
  
 
  console.log(this.bank)
  if (this.gameState.playerTotal == 21 && this.gameState.gameState==0){
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    this.displayMessage="BlackJack"
    let payout = (this.transferService.getBet()+this.transferService.getBet())
    this.bank = this.bank + payout
    this.transferService.bank = this.bank
  }if(this.gameState.gameState!=0 && this.gameState.playerTotal<=this.gameState.dealertotal){
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    this.displayMessage="You lost!"
  }if(this.gameState.gameState!=0 && this.gameState.playertotal>this.gameState.playertotal){
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    this.displayMessage="You won!"
    let payout = (this.transferService.getBet()+this.transferService.getBet())
    this.bank = this.bank + payout
    this.transferService.bank = this.bank
  }if(this.gameState.gameState==0 && this.gameState.dealerTotal==21){
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    this.displayMessage="You lost!"
  }if(this.gameState.playerTotal>21){
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    this.displayMessage="You busted!"
  }if(this.gameState.dealerTotal>21){
    this.ddCollapse = true
    this.hitStayButtonCollapse = true
    let payout = (this.transferService.getBet()+this.transferService.getBet())
    this.bank = this.bank + payout
    this.transferService.bank = this.bank
    this.displayMessage="You won!"
  }

    
}






  }





  /*console.log("*****hitting*****")
      const Http = new XMLHttpRequest();
      Http.open("GET", this.url+ this.deckID+ "/draw/?count=1");   
      console.log(Http.readyState)     //
      Http.send();     
      console.log(Http.readyState)                                                     //this function draws a new card from the deck api 
      Http.onreadystatechange = () => {  
        console.log(Http.readyState)
        console.log(Http.status)
        if (Http.readyState ==4 && Http.status==200){
          let newCard = (Http.responseText)                                   //
          let parsed_NewCard = JSON.parse(newCard)  
          console.log(newCard)  
          console.log(parsed_NewCard)                        //        this is to get the proper information
          let deckID= parsed_NewCard.deck_id 
          console.log(deckID)  
                                                                           //        after hittng the deal button
          this.deckService.allCardStats = parsed_NewCard.cards  //object of new card = all allCardStats
          console.log(this.deckService.allCardStats)
          this.deckService.cardValueArray = Object.values(this.deckService.allCardStats) //card by itself with cardValueArray
          console.log(this.deckService.cardValueArray)
          console.log(this.cardValue)
          this.deckService.cardValueSplit = this.deckService.cardValueArray[0]
          this.cardValue=this.deckService.allCardStats[0].value
          this.deckService.cardImage=this.deckService.allCardStats[0].image
          this.deckService.cardCode=this.deckService.allCardStats[0].code
          console.log(this.deckService.cardCode)
          console.log(this.deckService.cardValueSplit)
          this.deckService.cardImageArray.push(this.deckService.cardImage)
          console.log(this.deckService.cardImageArray)
      console.log(this.deckService.deckID)
      //let tempNewCard =JSON.parse(this.deckService.allCardStats)
      console.log(this.deckService.cardValueSplit)
      */


function cardGen(): ((this: XMLHttpRequest, ev: Event) => any) | null {
  throw new Error('Function not implemented.');
}
