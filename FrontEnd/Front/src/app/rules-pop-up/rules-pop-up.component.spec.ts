import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesPopUpComponent } from './rules-pop-up.component';

describe('RulesPopUpComponent', () => {
  let component: RulesPopUpComponent;
  let fixture: ComponentFixture<RulesPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
