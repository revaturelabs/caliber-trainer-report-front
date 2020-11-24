import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageTotalAvgAssessmentComponent } from './review-page-total-avg-assessment.component';

describe('ReviewPageTotalAvgAssessmentComponent', () => {
  let component: ReviewPageTotalAvgAssessmentComponent;
  let fixture: ComponentFixture<ReviewPageTotalAvgAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageTotalAvgAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageTotalAvgAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
