import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QCComponent } from '../qc/qc.component';

import { QcOverallBatchTechnicalScoresComponent } from './qc-overall-batch-technical-scores.component';

describe('QcOverallBatchTechnicalScoresComponent', () => {
  let component: QcOverallBatchTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallBatchTechnicalScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcOverallBatchTechnicalScoresComponent],
      imports:[HttpClientTestingModule],
      providers:[QCComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcOverallBatchTechnicalScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
