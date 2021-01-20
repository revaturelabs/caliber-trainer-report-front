import { Injectable } from '@angular/core';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public set(key: string, object: any): boolean {
    try {
      sessionStorage.setItem(key, JSON.stringify(object));
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public get(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public delete(key: string): void {
    return sessionStorage.removeItem(key);
  }
}
