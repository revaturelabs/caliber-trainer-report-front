import { TestBed } from '@angular/core/testing';

import { GetQcNoteService } from './get-qc-note.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetQcNoteService', () => {
  let service: GetQcNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(GetQcNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
