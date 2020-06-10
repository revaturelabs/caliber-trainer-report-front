import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBatchesTrendCategoryTechnicalStatusComponent } from './assessment-batches-trend-category-technical-status.component';

describe('AssessmentBatchesTrendCategoryTechnicalStatusComponent', () => {
  let component: AssessmentBatchesTrendCategoryTechnicalStatusComponent;
  let fixture: ComponentFixture<AssessmentBatchesTrendCategoryTechnicalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentBatchesTrendCategoryTechnicalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBatchesTrendCategoryTechnicalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
