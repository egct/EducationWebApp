import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIComponent } from './chapter-i.component';

describe('ChapterIComponent', () => {
  let component: ChapterIComponent;
  let fixture: ComponentFixture<ChapterIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
