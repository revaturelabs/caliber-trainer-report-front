import { TestBed } from '@angular/core/testing';

import { SendJSONAsStringService } from './send-json-as-string.service';

describe('SendJSONAsStringService', () => {
  let service: SendJSONAsStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendJSONAsStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
