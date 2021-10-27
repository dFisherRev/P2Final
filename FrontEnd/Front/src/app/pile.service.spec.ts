import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PileService } from './pile.service';

fdescribe('HttpPileService', ()=>{
  let httpTestController: HttpTestingController;
  let pileService: PileService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
      providers: [PileService]
  }));

  beforeEach(() => {
    pileService = TestBed.inject(PileService);
    httpTestController = TestBed.get(HttpTestingController);
  });
/*
  it('should get HttpClient.get for PileService getPlayerPile', ()=>{
    const testPile = {
                      "success": true,
                      "deck_id": "kkadm0q70dfr",
                      "remaining": 50,
                      "piles": {
                                "dealer" : {
                                "remaining" : 1
                                },
                                "player": {
                                "remaining": 1,
                                "cards": [
                                {
                                  "code": "5C",
                                  "image": "https://deckofcardsapi.com/static/img/5C.png",
                                  "images": {
                                              "svg": "https://deckofcardsapi.com/static/img/5C.svg",
                                              "png": "https://deckofcardsapi.com/static/img/5C.png"
                                  },
                                  "value": "5",
                                  "suit": "CLUBS"
                                }
                              ]
                            }
                          }
                        }
                  
                       
    pileService.getPlayerPile("kkadm0q70dfr").subscribe((pileResponse)=>{
      expect(testPile).toBe(pileResponse, 'should check mocked data');
      console.log("pileB: " + pileResponse)
    });

    const req = httpTestController.expectOne("http://deckofcardsapi.com/api/deck/kkadm0q70dfr/pile/player/list/");

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPile);
  });

  it('should get HttpClient.get for PileService getDealerPile', ()=>{
    const testPile = {
                      "success": true,
                      "deck_id": "kkadm0q70dfr",
                      "remaining": 50,
                      "piles": {
                                "dealer": {
                                "remaining": 1,
                                "cards": [
                                {
                                  "code": "5C",
                                  "image": "https://deckofcardsapi.com/static/img/5C.png",
                                  "images": {
                                              "svg": "https://deckofcardsapi.com/static/img/5C.svg",
                                              "png": "https://deckofcardsapi.com/static/img/5C.png"
                                  },
                                  "value": "5",
                                  "suit": "CLUBS"
                                }
                              ]
                            },
                            "player":{
                            "remaining" : 1
                            }
                          }
                        }
                  
                       
    pileService.getDealerPile("kkadm0q70dfr").subscribe((pileResponse)=>{
      expect(testPile).toBe(pileResponse, 'should check mocked data');
      console.log("pileB: " + pileResponse)
    });

    const req = httpTestController.expectOne("http://deckofcardsapi.com/api/deck/kkadm0q70dfr/pile/dealer/list/");

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPile);
  });

  it('should get HttpClient.get for PileService addCardToPile', ()=>{
    const hypoResponse = {
                          "success": true,
                          "deck_id": "2nxnnd29gqlk",
                          "remaining": 50,
                          "piles": {
                                    "player": {"remaining": 2}
                                  }
                        }
                  
                       
    pileService.addCardToPile("2nxnnd29gqlk", "player", "7C").subscribe((cardAddResponse)=>{
      expect(hypoResponse).toBe(cardAddResponse, 'should check mocked data');
      console.log("cardAddResponse: " + cardAddResponse)
    });

    const req = httpTestController.expectOne("http://deckofcardsapi.com/api/deck/2nxnnd29gqlk/pile/player/add/?cards=7C");

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(hypoResponse);
  });
});

*/
})
