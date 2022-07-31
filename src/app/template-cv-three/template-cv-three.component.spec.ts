import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCvThreeComponent } from './template-cv-three.component';

describe('TemplateCvThreeComponent', () => {
  let component: TemplateCvThreeComponent;
  let fixture: ComponentFixture<TemplateCvThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCvThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCvThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
