import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregameViewComponent } from './pregame-view.component';

describe('PregameViewComponent', () => {
  let component: PregameViewComponent;
  let fixture: ComponentFixture<PregameViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregameViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
