import { TestBed } from '@angular/core/testing';

import { FirstChartService } from './first-chart.service';

describe('FirstChartService', () => {
  let service: FirstChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return value from observable`, (done) => {
    service.getTechnicalStatusPerBatch().subscribe(value => {
        expect(value).toHaveBeenCalled();
    })
  });
});
