import { TestBed } from '@angular/core/testing';

import { GetBatchService } from './get-batch.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('GetBatchesService', () => {
  let service: GetBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(GetBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
