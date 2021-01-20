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

  //the resizing thing cannot be done in Jasmine/Karma so it is useless.

  it('should make a graph with name "Homestuck" when I give it the title "Homestuck"', () => {
    let newGraphOptions = service.graphOptions("Homestuck");
    expect(newGraphOptions.title.text).toBe("Homestuck");
  });
});
