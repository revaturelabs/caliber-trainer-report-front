<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';

=======
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
>>>>>>> b0404044ae419a7b841ab41f79b73d895d6df3ac
import { AssessmentService } from './assessment.service';
import { Assessment } from '../class/assessment';
import { promise } from 'protractor';

describe('AssessmentService', () => {
<<<<<<< HEAD
  beforeEach(() => TestBed.configureTestingModule({}));
=======
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
>>>>>>> b0404044ae419a7b841ab41f79b73d895d6df3ac

  it('should be created', () => {
    const service: AssessmentService = TestBed.get(AssessmentService);
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
