import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRightColumnTagsComponent } from './board-right-column-tags.component';

describe('BoardRightColumnTagsComponent', () => {
  let component: BoardRightColumnTagsComponent;
  let fixture: ComponentFixture<BoardRightColumnTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardRightColumnTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardRightColumnTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
