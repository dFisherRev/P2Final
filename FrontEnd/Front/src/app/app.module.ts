import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuoteBubbleComponent } from './quote-bubble/quote-bubble.component';
import { RulesPopUpComponent } from './rules-pop-up/rules-pop-up.component';
import { GameplayviewComponent } from './gameplayview/gameplayview.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PileService } from './pile.service';
import { CardComponent}  from './card/card/card.component';
import { LoginComponent } from './login/login.component';
import { BettingSectionComponent } from './betting-section/betting-section.component';
import { PlayingSectionComponent } from './playing-section/playing-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { PregameViewComponent } from './pregame-view/pregame-view.component';
import { TransferService } from './services/game-bet.service';
import { DeckService } from './deck.service';
import { AuthInterceptor } from './AuthInterceptor';
import { SendchipsComponent } from './sendchips/sendchips.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuoteBubbleComponent,
    RulesPopUpComponent,
    GameplayviewComponent,
    CardComponent,
    LoginComponent,
    BettingSectionComponent,
    PlayingSectionComponent,
    RegisterComponent,
    AccountComponent,
    AccountViewComponent,
    PregameViewComponent,
    SendchipsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    PileService,
    TransferService,
    CardComponent,
    DeckService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }