import { Component, Inject, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { CardComponent } from '../card/card/card.component';
import { DeckService } from '../deck.service';
import { PileService } from '../pile.service';
import { TransferService } from '../services/game-bet.service';

@Component({
  selector: 'app-gameplayview',
  templateUrl: './gameplayview.component.html',
  styleUrls: ['./gameplayview.component.css'],
  //providers: [DeckService, TransferService]
})
export class GameplayviewComponent implements OnInit {
  isCollapsed: boolean =true;
  bet:number = 0;
  
  constructor(public deckService:DeckService, public transferService:TransferService, public cardService:CardComponent, public pileService:PileService) { }
  
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.transferService.bet = this.bet;
    
  }
  

  ngOnInit(): void{
  }

}



