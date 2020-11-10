import { TestBed } from '@angular/core/testing';

import { TechnicalStatusPerBatchService } from './TechnicalStatusPerBatch.service';

describe('TechnicalStatusPerBatchService', () => {
  let service: TechnicalStatusPerBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalStatusPerBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return value from observable`, (done) => {
    service.getTechnicalStatusPerBatch().subscribe(value => {
        expect(value).toHaveBeenCalled();
    });
  });
});
