import { TestBed } from '@angular/core/testing';

import { GetQcNoteService } from './get-qc-note.service';

describe('GetQcNoteService', () => {
  let service: GetQcNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQcNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
