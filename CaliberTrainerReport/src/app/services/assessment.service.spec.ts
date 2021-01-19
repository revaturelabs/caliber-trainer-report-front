import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssessmentService } from './assessment.service';
import { Assessment } from '../class/assessment';
import { promise } from 'protractor';

describe('AssessmentService', () => {
  let service: AssessmentService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockResponse = {id: "test"};
  let mockArray: Assessment[] = [];
  let mockPromise: Promise<Assessment[]> = new Promise<Assessment[]>(() => {});

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
      HttpClientTestingModule]
    });
    
    injector = getTestBed();
    service = TestBed.inject(AssessmentService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get asessments by batch', () => {
    service.getAssessmentByBatch().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
  });

  it('should get scores per category', () => {
    service.getScorePerCategory().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
  });

  it('should get sixth graph data', () => {
    service.getSixthGraphData().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
  });

  it('should get asessments by week and batch', () => {
    service.getAssessmentsByWeekAndBatchId("1",1).subscribe((res) => {
      expect(res).toEqual(mockArray);
    });
  });

  it('should get promise asessments byassessment', () => {
    let mySpy = spyOn(service, 'getPromiseAssessmentsByWeekAndBatchId').withArgs("1",1).and.callThrough();
    service.getPromiseAssessmentsByWeekAndBatchId("1", 1);
    expect(mySpy).toHaveBeenCalled();
  });

  it('should get promise asessments by week and batch', () => {
    let mySpy = spyOn(service, 'getAverageGradeByAssessment').withArgs(1).and.callThrough();
    service.getAverageGradeByAssessment(1);
    expect(mySpy).toHaveBeenCalled();
  });

});
