import { TestBed } from '@angular/core/testing';

import { FifthChartService } from './fifth-chart.service';

describe('FifthChartService', () => {
  let service: FifthChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifthChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
