import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetCategoryService } from './get-category.service';

describe('GetCategoryService', () => {
  let service: GetCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(GetCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
