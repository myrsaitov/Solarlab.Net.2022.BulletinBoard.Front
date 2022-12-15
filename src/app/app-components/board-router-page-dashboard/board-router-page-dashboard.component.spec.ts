import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRouterPageDashboardComponent } from './board-router-page-dashboard.component';

describe('BoardRouterPageDashboardComponent', () => {
  let component: BoardRouterPageDashboardComponent;
  let fixture: ComponentFixture<BoardRouterPageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardRouterPageDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardRouterPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
