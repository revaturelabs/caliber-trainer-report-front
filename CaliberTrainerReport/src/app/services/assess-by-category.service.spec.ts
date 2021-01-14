import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AssessmentByCategoryService } from './assess-by-category.service';

describe('AssessmentByCategoryService', () => {
  let service: AssessmentByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AssessmentByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
