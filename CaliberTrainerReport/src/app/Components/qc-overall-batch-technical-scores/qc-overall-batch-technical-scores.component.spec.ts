import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcOverallBatchTechnicalScoresComponent } from './qc-overall-batch-technical-scores.component';

describe('QcOverallBatchTechnicalScoresComponent', () => {
  let component: QcOverallBatchTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallBatchTechnicalScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcOverallBatchTechnicalScoresComponent ]
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
