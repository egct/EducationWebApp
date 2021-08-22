import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIIIComponent } from './chapter-iii.component';

describe('ChapterIIIComponent', () => {
  let component: ChapterIIIComponent;
  let fixture: ComponentFixture<ChapterIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterIIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
