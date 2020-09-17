import { TestBed } from '@angular/core/testing';

import { AssessmentByBatchService } from './AssessmentByBatch.service';

describe('AssessmentByBatchService', () => {
  let service: AssessmentByBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentByBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
