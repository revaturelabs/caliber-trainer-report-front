import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(): string{
    return 'http://localhost:8080/excaliber/';
  }

}
