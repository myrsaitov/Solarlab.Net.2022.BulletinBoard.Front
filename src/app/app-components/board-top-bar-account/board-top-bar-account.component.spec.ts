import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTopBarAccountComponent } from './board-top-bar-account.component';

describe('BoardTopBarAccountComponent', () => {
  let component: BoardTopBarAccountComponent;
  let fixture: ComponentFixture<BoardTopBarAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTopBarAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTopBarAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
