import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendchipsComponent } from './sendchips.component';

describe('SendchipsComponent', () => {
  let component: SendchipsComponent;
  let fixture: ComponentFixture<SendchipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendchipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
