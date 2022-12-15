import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLeftColumnCategoriesComponent } from './board-left-column-categories.component';

describe('BoardLeftColumnCategoriesComponent', () => {
  let component: BoardLeftColumnCategoriesComponent;
  let fixture: ComponentFixture<BoardLeftColumnCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardLeftColumnCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardLeftColumnCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
