import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment'

import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;
  let caliberUrl = 'https://caliber2-mock.revaturelabs.com/mock/';
  let mockId = '17';

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      providers:[UrlService]
    });
    service = TestBed.inject(UrlService);
    sessionStorage.setItem('selectedId', mockId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should return a url', () => {
    expect(service.getUrl()).toEqual(environment.backEndUrl);
  });

  it('should format the url using the id stored in session storage.', () => {
    let desiredUrl = service.getUrl() + mockId + '/';
    expect(service.getUrlWithId()).toEqual(desiredUrl);
  });

  it('should return caliber URL', () => {
    expect(service.getCaliberUrl()).toEqual(caliberUrl);
  });

});
