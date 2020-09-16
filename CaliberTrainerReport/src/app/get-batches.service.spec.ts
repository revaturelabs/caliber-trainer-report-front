import { TestBed } from '@angular/core/testing';

import { GetBatchesService } from './get-batches.service';

describe('GetBatchesService', () => {
  let service: GetBatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
