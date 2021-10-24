import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompGrafComponent } from './user-comp-graf.component';

describe('UserCompGrafComponent', () => {
  let component: UserCompGrafComponent;
  let fixture: ComponentFixture<UserCompGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompGrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
