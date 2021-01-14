import { TestBed } from '@angular/core/testing';

import { ErrorHandlingServiceService } from './error-handling-service.service';

describe('ErrorHandlingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandlingServiceService = TestBed.get(ErrorHandlingServiceService);
    expect(service).toBeTruthy();
  });
});
