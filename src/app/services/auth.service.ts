import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiConfigService {
   
  auth(body: any): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/login`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }
}
