import { TestBed } from '@angular/core/testing';

import { AssessmentByCategoryService } from './AssessmentByCategory.service';

describe('AssessmentByCategoryService', () => {
  let service: AssessmentByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
