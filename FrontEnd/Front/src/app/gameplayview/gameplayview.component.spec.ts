import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayviewComponent } from './gameplayview.component';

describe('GameplayviewComponent', () => {
  let component: GameplayviewComponent;
  let fixture: ComponentFixture<GameplayviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameplayviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameplayviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle to false', () => {
    component.toggleCollapse;
    expect(component.isCollapsed).toBeFalse;
  });
});
