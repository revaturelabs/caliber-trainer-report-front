import { TestBed } from '@angular/core/testing';

import { DisplayGraphService } from './display-graph.service';

describe('DisplayGraphService', () => {
  let service: DisplayGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
