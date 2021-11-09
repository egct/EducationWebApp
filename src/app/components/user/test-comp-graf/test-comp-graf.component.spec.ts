import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompGrafComponent } from './test-comp-graf.component';

describe('TestCompGrafComponent', () => {
  let component: TestCompGrafComponent;
  let fixture: ComponentFixture<TestCompGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCompGrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
