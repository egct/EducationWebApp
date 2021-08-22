import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIIComponent } from './chapter-ii.component';

describe('ChapterIIComponent', () => {
  let component: ChapterIIComponent;
  let fixture: ComponentFixture<ChapterIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
