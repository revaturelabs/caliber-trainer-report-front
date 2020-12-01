import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Assessment } from 'src/app/class/assessment';
import { AssessmentComponent } from '../assessment/assessment.component';

import { AssessmentScoresAccordingToBatchComponent } from './assessment-scores-according-to-batch.component';

describe('AssessmentScoresAccordingToBatchComponent', () => {
  let component: AssessmentScoresAccordingToBatchComponent;
  let fixture: ComponentFixture<AssessmentScoresAccordingToBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresAccordingToBatchComponent],
      imports:[HttpClientTestingModule],
      providers:[AssessmentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoresAccordingToBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
