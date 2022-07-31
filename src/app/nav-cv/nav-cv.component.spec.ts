import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCvComponent } from './nav-cv.component';

describe('NavCvComponent', () => {
  let component: NavCvComponent;
  let fixture: ComponentFixture<NavCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
