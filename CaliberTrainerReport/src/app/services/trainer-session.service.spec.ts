import { TestBed } from '@angular/core/testing';

import { TrainerSessionService } from './trainer-session.service';

describe('TrainerSessionService', () => {
  let service: TrainerSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
