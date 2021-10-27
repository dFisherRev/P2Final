import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TransferService } from '../services/game-bet.service';

import { BettingSectionComponent } from './betting-section.component';

describe('BettingSectionComponent', () => {
  let component: BettingSectionComponent;
  let fixture: ComponentFixture<BettingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add chips to bet', () => {
    component.addChipsToBet(10);
    expect(component.pot).toBe(10);
  });

  it('should remove chips from bank', () => {
    component.changeBank(10);
    expect(component.bank).toBe(990);
  });
});
