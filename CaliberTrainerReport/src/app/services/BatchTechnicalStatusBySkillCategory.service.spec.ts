import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BatchTechnicalStatusBySkillCategoryService } from './BatchTechnicalStatusBySkillCategory.service';

describe('BatchTechnicalStatusBySkillCategoryServiceService', () => {
  let service: BatchTechnicalStatusBySkillCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BatchTechnicalStatusBySkillCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
