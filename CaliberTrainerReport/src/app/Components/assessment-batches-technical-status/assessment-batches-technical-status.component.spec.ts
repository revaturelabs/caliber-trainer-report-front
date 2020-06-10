import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBatchesTechnicalStatusComponent } from './assessment-batches-technical-status.component';

describe('AssessmentBatchesTechnicalStatusComponent', () => {
  let component: AssessmentBatchesTechnicalStatusComponent;
  let fixture: ComponentFixture<AssessmentBatchesTechnicalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentBatchesTechnicalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBatchesTechnicalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
