
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentComponent } from '../assessment/assessment.component';
import { By } from '@angular/platform-browser';

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
    component.allBatches = JSON.parse(`[{"batchId":"Ix2x2UAB","batchName":"1804  Apr16 -2","assessmentScores":[75.74875,80.53154,78.206665,0,0]},{"batchId":"2rUNwAAM","batchName":"1901 Jan06 Other","assessmentScores":[77.69572,79.13,80.45,74.78,0]},{"batchId":"2rgIVAAY","batchName":"1903 Mar04 Full Stack Java/JEE","assessmentScores":[76.84375,59.44,83.13,0,0]},{"batchId":"2ehKRAAY","batchName":"1909 Sep30 Other","assessmentScores":[77.908455,78.20637,0,79.9,91.2]}]`);
    component.batchesObj = JSON.parse(`"[75.75,80.53,78.21,0,0]"`);
    component.batchNames = JSON.parse(`["1804  Apr16 -2","1901 Jan06 Other","1903 Mar04 Full Stack Java/JEE","1909 Sep30 Other"]`);
    component.pickedBatch = 0;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.allBatches).toBeTruthy();  
  });
  it('should be able to select different batch', () => {
    expect(component.pickedBatch == 0);
    component.pickedBatch = 1;
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css("#assessment-graph-selector")).nativeElement;
    expect(select.selectedIndex == 1);

    // dispatchFakeEvent(options[0].nativeElement, 'change');
  });
    
  //assessment-graph-selector


});