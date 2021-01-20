import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the backend url', () => {
    expect(service.getUrl()).toEqual(environment.backEndUrl);
  });

  it('should get URL with user id', () => {
    sessionStorage.setItem('selectedId', '1');
    expect(service.getUrlWithId()).toEqual(environment.backEndUrl + '1/');
    sessionStorage.setItem('selectedI', null);
  });

  it('should return caliber url', () => {
    expect(service.getCaliberUrl()).toEqual('https://caliber2-mock.revaturelabs.com/mock/');
  });
});
