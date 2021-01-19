import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AssessScoresByCategoryAllBatchesService } from './scores-by-category-all-batches.service';

describe('AssessScoresByCategoryAllBatchesService', () => {
  let service: AssessScoresByCategoryAllBatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AssessScoresByCategoryAllBatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
