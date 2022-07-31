import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCvOneComponent } from './template-cv-one.component';

describe('TemplateCvOneComponent', () => {
  let component: TemplateCvOneComponent;
  let fixture: ComponentFixture<TemplateCvOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCvOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCvOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
