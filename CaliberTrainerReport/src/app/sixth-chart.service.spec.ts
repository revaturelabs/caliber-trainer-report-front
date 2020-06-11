import { TestBed } from '@angular/core/testing';

import { SixthChartService } from './sixth-chart.service';

describe('SixthChartService', () => {
  let service: SixthChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SixthChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
