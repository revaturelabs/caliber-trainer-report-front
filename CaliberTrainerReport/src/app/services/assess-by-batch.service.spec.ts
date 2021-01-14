import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AssessmentByBatchService } from './assess-by-batch.service';

describe('AssessmentByBatchService', () => {
  let service: AssessmentByBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AssessmentByBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
