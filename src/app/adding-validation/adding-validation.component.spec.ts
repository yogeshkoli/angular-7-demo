import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingValidationComponent } from './adding-validation.component';

describe('AddingValidationComponent', () => {
  let component: AddingValidationComponent;
  let fixture: ComponentFixture<AddingValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
