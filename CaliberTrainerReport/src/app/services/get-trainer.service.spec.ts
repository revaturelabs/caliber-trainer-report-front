import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetTrainerService } from './get-trainer.service';

describe('GetTrainerService', () => {
  let service: GetTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(GetTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
