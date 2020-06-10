import { TestBed } from '@angular/core/testing';

import { SecondChartService } from './second-chart.service';

describe('SecondChartService', () => {
  let service: SecondChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
