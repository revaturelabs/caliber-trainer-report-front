import { TestBed } from '@angular/core/testing';

import { CompleteBatchDataService } from './complete-batch-data.service';

describe('CompleteBatchDataService', () => {

  /*
    getCompleteBatchDataById: A batch Id is provided and an httprequest is made to the backend.
    The return type is an observeable<batch>. The object returned by the observeable should be a complete batch, namely it contains an array of QCNotes and an array
    of Assessments. If an invalid batchId is provided then the HTTP request will return with an error code (400).
  */

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteBatchDataService = TestBed.get(CompleteBatchDataService);
    expect(service).toBeTruthy();
  });

});
