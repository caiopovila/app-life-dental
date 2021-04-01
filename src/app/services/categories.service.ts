import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiConfigService {
   
  get(): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/categories`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }
   
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/categories/${id}`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }
}
