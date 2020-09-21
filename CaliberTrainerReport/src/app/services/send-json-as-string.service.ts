import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SendJSONAsStringService {

  constructor(private http : HttpClient, private us : UrlService) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':'Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Access-Control-Allow-Headers,Authorization,Accept,Content-Type,Origin,Host,Referer,X-Requested-With,X-CSRF-Token',
    'Accept':'*/*',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': 'true'
  });
  
  sendJSON(json : string) : Observable<any>{
    return this.http.post<any>(this.us.getUrl() + "JSONController", json, {headers: this.headers});
  }

}
