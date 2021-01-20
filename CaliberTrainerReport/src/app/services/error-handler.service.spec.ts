import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ErrorHandlerService);
  });
  it('should be created', () => {
    service = TestBed.get(ErrorHandlerService);
    expect(service).toBeTruthy();
  });

  it('should handle error', () => {
    let errorEvent:ErrorEvent = new ErrorEvent('type');
    let clientInit = {
      error: errorEvent,
    };
    let error = new HttpErrorResponse(clientInit);
    try {
      service.handleError(error);
    } catch (e) {
      expect(e).toBeTruthy();
    }

    let serverInit = {
      error: 'error',
      status: 400,
    };
    error = new HttpErrorResponse(serverInit);
    try {
      service.handleError(error);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
