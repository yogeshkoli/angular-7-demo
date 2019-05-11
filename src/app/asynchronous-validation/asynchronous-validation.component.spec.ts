import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousValidationComponent } from './asynchronous-validation.component';

describe('AsynchronousValidationComponent', () => {
  let component: AsynchronousValidationComponent;
  let fixture: ComponentFixture<AsynchronousValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchronousValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
