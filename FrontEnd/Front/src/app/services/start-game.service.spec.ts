import { TestBed } from '@angular/core/testing';

import {StartGameService} from './start-game.service';


describe('PopupService', () => {
  let service: StartGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the bet', () => {
    service.setBet(100);
    expect(service.getBet()).toBe(100);
  });

  it('should get the bet', () => {
    service.setBet(100);
    let returnedBet = service.getBet();
    expect(returnedBet).toBe(100);
  });

  it('should clear the bet to zero', () => {
    service.setBet(100);
    service.clearBet();
    expect(service.getBet()).toBe(0);
  });
});