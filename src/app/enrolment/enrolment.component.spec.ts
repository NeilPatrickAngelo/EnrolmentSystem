import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolmentComponent } from './enrolment.component';

describe('EnrolmentComponent', () => {
  let component: EnrolmentComponent;
  let fixture: ComponentFixture<EnrolmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolmentComponent]
    });
    fixture = TestBed.createComponent(EnrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
