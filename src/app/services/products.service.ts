import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiConfigService {

  get(): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/products`, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  search(q: string, param?: HttpParams): Observable<any> {
    return this.http.post(`${this.getUrlApi()}/products/all`, { q: q }, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            params: param,
            responseType: 'json'
          });
  }

  getOne(id: number): Observable<any> {
    return this.http.get(`${this.getUrlApi()}/products/${id}`, {
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
    return this.http.post(`${this.getUrlApi()}/products`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  put(body: any): Observable<any> {
    return this.http.put(`${this.getUrlApi()}/products/${body.id}`, body, {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `Bearer ${this.getIdSession()}`
            }),
            withCredentials: true,
            observe: 'body',
            responseType: 'json'
          });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.getUrlApi()}/products/${id}`, {
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
