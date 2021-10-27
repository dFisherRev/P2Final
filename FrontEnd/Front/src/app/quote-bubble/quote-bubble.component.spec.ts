import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBubbleComponent } from './quote-bubble.component';

describe('QuoteBubbleComponent', () => {
  let component: QuoteBubbleComponent;
  let fixture: ComponentFixture<QuoteBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return default quote value', () => {
    let defaultQuote:string = "Maybe I should just quit and go back to making noodles.";
    expect(component.getQuote()).toEqual(defaultQuote);
  });

  it('should set new quote value', () => {
    let testQuote:string = "This is not the greatest song in world. This is just a tribute.";
    component.setQuote(testQuote);
    expect(component.getQuote()).toEqual(testQuote);
  });
});