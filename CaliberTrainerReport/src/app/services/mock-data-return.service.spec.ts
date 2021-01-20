import { TestBed } from '@angular/core/testing';

import { MockDataReturnService } from './mock-data-return.service';

describe('MockDataReturnService', () => {
  let service: MockDataReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDataReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the trainers', () => {
    expect(service.getAllMockTrainers()).toEqual(service.trainers);
  });
});
