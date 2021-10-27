import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  private cardSource:string = "../../../assets/card-back.png";
  private isCardBack = false;
  private readonly cardBackSource: string = "../../../assets/card-back.png";  

  constructor() { }

  ngOnInit(): void {
  }

  setCardSource(cardSource:string){
    this.cardSource=cardSource;
  }

  setIsCardBack(isCardBack:boolean){
    this.isCardBack=isCardBack;
  }

  getCardSource():string{
    return this.isCardBack ? this.cardBackSource : this.cardSource;
  }


}
