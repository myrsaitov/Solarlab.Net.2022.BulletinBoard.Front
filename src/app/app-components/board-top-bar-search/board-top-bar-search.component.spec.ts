import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTopBarSearchComponent } from './board-top-bar-search.component';

describe('BoardTopBarSearchComponent', () => {
  let component: BoardTopBarSearchComponent;
  let fixture: ComponentFixture<BoardTopBarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTopBarSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTopBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
