import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AssessmentService } from './assessment.service';

describe('AssessmentService', () => {
  let service: AssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
