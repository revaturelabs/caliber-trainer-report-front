import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BatchService } from './batch.service';

describe('BatchService', () => {
  let service: BatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it(`should return value from observable`, () => {
  //   service.getTechnicalStatusPerBatch().subscribe(value => {
  //       expect(value).toHaveBeenCalled();
  //   });
  // });
  
});
