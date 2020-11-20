import { TestBed } from '@angular/core/testing';

import { DisplayQcAverageGraphService } from './display-qc-average-graph.service';

describe('DisplayQcAverageGraphService', () => {
  let service: DisplayQcAverageGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayQcAverageGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
