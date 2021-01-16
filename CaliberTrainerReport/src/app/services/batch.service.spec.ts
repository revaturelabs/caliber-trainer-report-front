import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BatchService } from './batch.service';

describe('BatchService', () => {
  let service: BatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
