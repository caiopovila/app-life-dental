import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends ApiConfigService {
   
  get(): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/customers`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  post(body: any): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/customers`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            }),
            observe: 'body',
            responseType: 'json'
          });
  }
}
