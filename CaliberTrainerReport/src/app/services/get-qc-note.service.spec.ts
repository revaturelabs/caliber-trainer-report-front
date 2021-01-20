import { TestBed } from '@angular/core/testing';

import { GetQcNoteService } from './get-qc-note.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetQcNoteService', () => {
  let service: GetQcNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(GetQcNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
