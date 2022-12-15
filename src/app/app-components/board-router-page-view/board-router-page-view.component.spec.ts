import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRouterPageViewComponent } from './board-router-page-view.component';

describe('BoardRouterPageViewComponent', () => {
  let component: BoardRouterPageViewComponent;
  let fixture: ComponentFixture<BoardRouterPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardRouterPageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardRouterPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
