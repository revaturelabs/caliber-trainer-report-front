import { TestBed } from '@angular/core/testing';

import { FourthChartService } from './fourth-chart.service';

describe('FourthChartService', () => {
  let service: FourthChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourthChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
