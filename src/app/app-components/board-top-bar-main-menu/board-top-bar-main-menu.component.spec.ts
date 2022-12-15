import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTopBarMainMenuComponent } from './board-top-bar-main-menu.component';

describe('BoardTopBarMainMenuComponent', () => {
  let component: BoardTopBarMainMenuComponent;
  let fixture: ComponentFixture<BoardTopBarMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTopBarMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTopBarMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
