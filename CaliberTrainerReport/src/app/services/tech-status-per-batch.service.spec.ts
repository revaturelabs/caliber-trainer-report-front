import { TestBed } from '@angular/core/testing';

import { TechnicalStatusPerBatchService } from './tech-status-per-batch.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TechnicalStatusPerBatchService', () => {
  let service: TechnicalStatusPerBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TechnicalStatusPerBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return value from observable`, () => {
    service.getTechnicalStatusPerBatch().subscribe(value => {
        expect(value).toHaveBeenCalled();
    });
  });
});
