import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ɵpatchComponentDefWithScope } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QCComponent } from '../qc/qc.component';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
import { QcOverallBatchTechnicalScoresComponent } from './qc-overall-batch-technical-scores.component';

describe('QcOverallBatchTechnicalScoresComponent', () => {
  let component: QcOverallBatchTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallBatchTechnicalScoresComponent>;
  // let mockTechnicalStatus = [[0,10,1,10,5], 
  //       [10,15,0,0,0], 
  //       [10,0,5,2,3], 
  //       [10,15,0,20,10], 
  //       [10,15,20,10,0]];
  let mockData = [
    {category: "Java",
    batchName: "test1",
    technicalStatus: [0,10,0,10,5],
    averageAvg: 50,
    averageCount: 6,
    goodAvg: 50,
    goodCount: 6,
    nullAvg: 0,
    nullCount: 0,
    poorAvg: 0,
    poorCount: 0,
    superstarAvg: 0,
    superstarCount: 0},
    {category: "JavaScript",
    batchName: "test1",
    technicalStatus: [10,0,1,0,5],
    averageAvg: 50,
    averageCount: 6,
    goodAvg: 50,
    goodCount: 6,
    nullAvg: 0,
    nullCount: 0,
    poorAvg: 0,
    poorCount: 0,
    superstarAvg: 0,
    superstarCount: 0},
    {category: "SQL",
    batchName: "test1",
    technicalStatus: [2,10,1,10,0],
    averageAvg: 50,
    averageCount: 6,
    goodAvg: 50,
    goodCount: 6,
    nullAvg: 0,
    nullCount: 0,
    poorAvg: 0,
    poorCount: 0,
    superstarAvg: 0,
    superstarCount: 0}];

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

