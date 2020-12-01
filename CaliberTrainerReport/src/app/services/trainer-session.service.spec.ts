import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TrainerSessionService } from './trainer-session.service';

describe('TrainerSessionService', () => {
  let service: TrainerSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TrainerSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
