import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheck01Component } from './form-check01.component';

describe('FormCheck01Component', () => {
  let component: FormCheck01Component;
  let fixture: ComponentFixture<FormCheck01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCheck01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheck01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
