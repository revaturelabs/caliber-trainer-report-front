import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

fdescribe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });

  it('should store a key-value pair and retrieve that pair when I provide its key', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);

    let key = "it's been so long";
    let value = "since I've last seen my son";
    service.set(key, value);
    expect(service.get(key)).toBe(value);
  });

  it('should return null when I delete a key-value pair and search with that key', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);

    let key = "it's been so long";
    let value = "since I've last seen my son";
    service.set(key, value);
    service.delete(key);
    expect(service.get(key)).toBeNull();
  });
});
