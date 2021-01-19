import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TrainerService } from './trainer.service';

describe('TrainerService', () => {
  let service: TrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(TrainerService);
  });

  it('should be created', () => {
    const service: TrainerService = TestBed.get(TrainerService);
    expect(service).toBeTruthy();
  });
});
