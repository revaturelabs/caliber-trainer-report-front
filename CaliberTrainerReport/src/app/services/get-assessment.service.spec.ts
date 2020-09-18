import { TestBed } from '@angular/core/testing';

import { GetAssessmentService } from './get-assessment.service';

describe('GetAssessmentService', () => {
  let service: GetAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
