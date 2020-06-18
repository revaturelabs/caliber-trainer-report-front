import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBatchesIndivCategoryTechnicalStatusComponent } from './assessment-batches-indiv-category-technical-status.component';

describe('AssessmentBatchesIndivCategoryTechnicalStatusComponent', () => {
  let component: AssessmentBatchesIndivCategoryTechnicalStatusComponent;
  let fixture: ComponentFixture<AssessmentBatchesIndivCategoryTechnicalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentBatchesIndivCategoryTechnicalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBatchesIndivCategoryTechnicalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
