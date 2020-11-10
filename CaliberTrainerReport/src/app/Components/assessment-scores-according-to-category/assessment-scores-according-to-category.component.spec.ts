import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentScoresAccordingToCategoryComponent } from './assessment-scores-according-to-category.component';

describe('AssessmentScoresAccordingToCategoryComponent', () => {
  let component: AssessmentScoresAccordingToCategoryComponent;
  let fixture: ComponentFixture<AssessmentScoresAccordingToCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresAccordingToCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoresAccordingToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
