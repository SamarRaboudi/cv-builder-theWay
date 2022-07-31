import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCvTwoComponent } from './template-cv-two.component';

describe('TemplateCvTwoComponent', () => {
  let component: TemplateCvTwoComponent;
  let fixture: ComponentFixture<TemplateCvTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCvTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCvTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
