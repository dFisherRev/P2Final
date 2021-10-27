import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-bubble',
  templateUrl: './quote-bubble.component.html',
  styleUrls: ['./quote-bubble.component.css']
})
export class QuoteBubbleComponent implements OnInit {

  private quote:string = "Maybe I should just quit and go back to making noodles.";
  public show:boolean = true;

  constructor() {

   }
  
  ngOnInit(): void {
  }

  getQuote():string{
    return this.quote;
  }

  setQuote(quote:string):void{
    this.quote= quote;
  }

}
