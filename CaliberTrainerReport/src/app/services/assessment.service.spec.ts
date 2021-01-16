import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AssessmentService } from './assessment.service';

describe('AssessmentService', () => {
  let service: AssessmentService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
